import express from "express";
import bcrypt from "bcrypt";
import userModel from "../model/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();
const JWT_SECRET = "secretkey1234";

router.post("/register", async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const userExist = await userModel.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new userModel({
      username,
      email,
      password: hashedPassword,
      role: role || "user",
    });

    await user.save();
    return res.status(200).json({ message: "User registration successful" });
  } catch (error) {
    return res.status(500).json({ message: "User registration failed" });
  }
});

// Role middleware
const verifyRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ message: "Access forbidden: unauthporized" });
    }
    next();
  };
};

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const userExist = await userModel.findOne({ email });
    if (!userExist) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, userExist.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: userExist._id, role: userExist.role },
      JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    // Return token if login is successful
    return res.status(200).json({ token: token, role: userExist.role });
  } catch (error) {
    return res.status(500).json({ message: "User login failed" });
  }
});

const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Token is missing" });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    console.log(`user id:${req.user.id}`);
    console.log(`decoded:${decoded.id}`);

    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
//  role based routes
router.get("/admin", verifyToken, verifyRole(["admin"]), (req, res) => {
  res.status(200).json({ message: "Welcome Admin!" });
});

router.get("/user", verifyToken, verifyRole(["user", "admin"]), (req, res) => {
  res.status(200).json({ message: "Welcome User!" });
});

router.get("/home", verifyToken, async (req, res) => {
  try {
    const user = await userModel.findById(req.user.id); // Find user by ID
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "Token is valid",
      user: { username: user.username, role: user.role },
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching user data" });
  }
});

export default router;
