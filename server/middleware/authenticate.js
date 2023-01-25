const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");
const keysecret = process.env.KEY

const authenticate = async (req, res, next) => {
    console.log("cokieeeeee", req.cookies)
    try {
        console.log(req.cookies, "reyqweywqrewq")
        const token = req.cookies.eccomerce;

        console.log('token', token)

        const verifyToken = jwt.verify(token, keysecret);
        console.log("verifyToken", verifyToken)

        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });


        if (!rootUser) { throw new Error("User Not Found") };

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();


    } catch (error) {
        res.status(401).send("Unauthorized:No token provided");
        console.log(error);
    }
};

module.exports = authenticate;