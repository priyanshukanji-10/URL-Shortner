const short = require("short-uuid");
const URL = require("../models/url");
const generateShortId = () => {
  const uuid = short.generate();
  const shortId = uuid.slice(0, 8);
  return shortId;
};
// This function creates shortIDs for a given urls and stores it in database
const handleGenerateShortId = async (req, res) => {
  const shortId = generateShortId();
  const body = req.body;

  if (!body.url) {
    return res.status(400).json({ error: "url is required" });
  }

  try {
    await URL.create({
      shortId: shortId,
      redirectUrl: body.url,
      visitHistory: [],
    });

    return res.status(201).json({ shortId: shortId });
  } catch (error) {
    console.error("Error creating URL:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { handleGenerateShortId };
