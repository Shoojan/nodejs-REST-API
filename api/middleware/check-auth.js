const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    if (typeof authorizationHeader !== "undefined" && authorizationHeader) {
      const token = authorizationHeader.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_KEY);
      req.userData = decoded;
      next();
    } else {
      return res.status(500).json({ message: "Authorization failed!" });
    }
  } catch (err) {
    return res.status(401).json(err);
  }
};
