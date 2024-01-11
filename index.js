const express = require("express");
const mongoose = require("mongoose");
// Imporing Routers
const urlRouter = require("./routes/url");
const app = express();
const URL = require("./models/url");
const { connectMongoDB } = require("./connect");
connectMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("Mongodb connected")
);
app.use(express.json());
app.use("/url", urlRouter);
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    { $push: { visitHistory: { timestamp: Date.now() } } }
  );
  res.redirect(entry.redirectUrl);
});
const PORT = 5001;
app.listen(PORT, () => console.log(`Server started at Port:${PORT}`));
