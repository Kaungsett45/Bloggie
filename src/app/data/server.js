import express from 'express'; // Use `import` instead of `require()`


require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { OAuth2Client } = require("google-auth-library");

const app = express();
app.use(express.json());
app.use(cors());

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Verify Google Token API
app.post("/auth/google", async (req, res) => {
  const { token } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    res.json({ success: true, user: payload });
  } catch (error) {
    res.status(400).json({ success: false, error: "Invalid token" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
