const jsonwebtoken = require("jsonwebtoken");

module.exports.requireAuth = (req, res) => {};

module.exports.verifyToken = (req, res, next) => {
  //console.log(req.cookie);
  // why req.cookie is not working 

  if(!req.headers.cookie){
    res.status(400).json({error:"No token found"});
  }
  else{
    const token = req.headers.cookie.split('=')[1];
    jsonwebtoken.verify(
      token,
      process.env.JWS_SECRET,
      async (err, decoded) => {
        if (err) {
          // Invalid token
          console.log("verifyToken : failed decoding, invalid token");
          res.status(400).send({ error: "Invalid token" });
        } else {
          console.log("verifyToken : Successful decoding");
          console.log(decoded.id);
          req.userId = decoded.id;
        }});}
        next();};
