const express = require("express");
// Imporing Routers
const urlRouter = require("./routes/url");
const redirectRouter = require("./routes/redirect");
// Creating apps
const app = express();
// Middlewares
app.use(express.json());
// Connecting to MongoDB
const { connectMongoDB } = require("./connect");
connectMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("Mongodb connected")
);
// Routers
app.use("/url", urlRouter);
app.use("/:shortId", redirectRouter);


const PORT = 5001;
app.listen(PORT, () => console.log(`Server started at Port:${PORT}`));
