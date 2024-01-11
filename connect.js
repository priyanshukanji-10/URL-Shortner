const mongoose = require("mongoose");
let connectMongoDB = (url) => {
 return mongoose.connect(url);
};
module.exports = { connectMongoDB };
