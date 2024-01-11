const URL = require("../models/url");
// This function redirects from shortened url to main redirect url
const handleRedirectUrl = async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    { $push: { visitHistory: { timestamp: Date.now() } } }
  );
  res.redirect(entry.redirectUrl);
};
module.exports = { handleRedirectUrl };
