import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("My Node API is running!");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    message: "Server is healthy!!",
    status: 200
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
