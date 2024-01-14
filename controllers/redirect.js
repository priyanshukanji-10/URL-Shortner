const URL = require("../models/url");
const handleRedirect = async (req, res) => {
  const shortID = req.params.shortID;

  try {
    const entry = await URL.findOneAndUpdate(
      { shortId: shortID }, // Use shortID as the parameter name
      { $push: { visitHistory: { timestamp: Date.now() } } }
    );

    if (entry && entry.redirectUrl) {
      res.redirect(entry.redirectUrl);
    } else {
      console.log("URL not found:", shortID);
      res.status(404).send("URL not found");
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { handleRedirect };
