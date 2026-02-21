const express = require("express");
const cors = require("cors");
const os = require("os");

const app = express();
app.use(cors());

// Free memory
app.get("/api/free-memory", (req, res) => {
  res.json({ value: `${(os.freemem() / 1024 / 1024).toFixed(2)} MB` });
});

// Total memory
app.get("/api/total-memory", (req, res) => {
  res.json({ value: `${(os.totalmem() / 1024 / 1024).toFixed(2)} MB` });
});

// CPU architecture
app.get("/api/cpu", (req, res) => {
  res.json({ value: os.arch() });
});


// User info
app.get("/api/user", (req, res) => {
  res.json({ value: os.userInfo().username });
});

app.listen(5000, () => {
  console.log("✅ Backend running on http://localhost:5000");
});
