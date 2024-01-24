// Importing Dependencies
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

// Creating app
const app = express();
// Imporing Routers
const urlRouter = require("./routes/url");
const redirectRouter = require("./routes/redirect");
const staticRoute = require("./routes/staticRoute");
const userRoute = require("./routes/user");
// Importing Middlewares
const { restrictToLoggedInUserOnly } = require("./middlewares/auth");
// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Setting up to Server Side Rendering using EJS
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.static("public"));
// Connecting to MongoDB
const { connectMongoDB } = require("./connect");
connectMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("Mongodb connected")
);
// Routers
app.use("/", staticRoute);
app.use("/url", restrictToLoggedInUserOnly, urlRouter);
app.use("/", redirectRouter);
app.use("/user", userRoute);

const PORT = 5001;
app.listen(PORT, () => console.log(`Server started at Port:${PORT}`));
