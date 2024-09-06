import express from "express";
import userModel from "../model/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();

const JWT_SECRET = "secretkey1234";
const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    console.log(`Auth Header: ${authHeader}`);

    if (!authHeader) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Token is missing" });
    }

    console.log(`Token: ${token}`);
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    console.log(`User ID: ${req.user.id}`);
    console.log(`Decoded: ${JSON.stringify(decoded)}`);

    next();
  } catch (error) {
    console.error("Token verification error:", error);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

// Get all users
router.get("/users", verifyToken, async (req, res) => {
  console.log("GET /users route hit");
  try {
    const users = await userModel.find();
    console.log(`users:${users}`);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
});

// Add a new user
router.post("/users", verifyToken, async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    console.log(req.body);
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      username,
      email,
      password: hashedPassword,
      role,
    });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Error creating user" });
  }
});

// Edit user details
router.put("/users/:id", verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, role } = req.body;
    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      {
        username,
        email,
        role,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Error updating user" });
  }
});

// Delete a user
router.delete("/users/:id", verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    await userModel.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user" });
  }
});

// Assign role to a user
router.patch("/users/:id/role", verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;
    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      { role },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Error updating user role" });
  }
});

export default router;
