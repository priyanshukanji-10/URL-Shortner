const express = require("express");
const path = require("path");

// Importing Routers
const urlRouter = require("./routes/url");
const redirectRouter = require("./routes/redirect");
const staticRoute = require("./routes/staticRoute");

// Creating app
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setting up for Server-Side Rendering using EJS
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Serving static files from the 'public' directory
app.use(express.static('public'));

// Connecting to MongoDB
const { connectMongoDB } = require("./connect");
connectMongoDB("mongodb://localhost:27017/short-url")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routers
app.use("/url", urlRouter);
app.use("/", redirectRouter);
app.use("/", staticRoute);

// Define a catch-all route for any unmatched routes
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server started at Port: ${PORT}`));
