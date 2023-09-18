const jsonwebtoken = require("jsonwebtoken");

module.exports.requireAuth = (req, res) => {};

module.exports.verifyToken = (req, res, next) => {
  console.log(req.cookie);
  if (!req.cookie) {
    console.log(":( sad");
    res.json({ name: "empty" });
  } else {
    console.log(req.headers.cookie);
    const token = req.cookie.jwt;
    jsonwebtoken.verify(
      token,
      process.env.JWS_SECRET,
      async (err, decodedUserId) => {
        if (err) {
          // Invalid token
          console.log("verifyToken : failed decoding, invalid token");
          res.send({ error: "Invalid token" });
        } else {
          console.log("verifyToken : Successful decoding");
          console.log(`verifyToken: userId is ${decodedUserId}`);
          req.userId = decodedUserId;
        }
      }
    );
    next();
  }
};
