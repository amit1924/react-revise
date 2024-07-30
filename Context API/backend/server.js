/* eslint-disable no-unused-vars */
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import cors from "cors";

const app = express();
const PORT = 3000;
const SECRET_KEY = "abc12345";

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const users = [
  {
    id: 1,
    username: "amit123",
    password: bcrypt.hashSync("amit123", 8),
  },
  {
    id: 2,
    username: "abhi123",
    password: bcrypt.hashSync("abhi123", 8),
  },
];

// Token Verification
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(403).send("Token is required");
  }
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send("Invalid token");
    }
    req.user = decoded;
    console.log(`decoded: ${decoded} ${req.user}`);
    next();
  });
};

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  const user = users.find((u) => u.username === username);

  if (!user) {
    console.log("User not found");
    return res.status(404).json({ message: "User not found" });
  }

  if (bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign(
      { id: user.id, username: user.username },
      SECRET_KEY,
      { expiresIn: "1h" }
    );
    console.log("Token generated:", token);
    return res.status(200).json({ token });
  } else {
    console.log("Invalid password");
    return res.status(401).json({ message: "Invalid password" });
  }
});

// Protected Route
app.get("/profile", verifyToken, (req, res) => {
  res.json({ message: `Welcome ${req.user.username}` });
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
