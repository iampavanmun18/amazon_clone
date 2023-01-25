const express = require('express');
const router = new express.Router(); // for api calling
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate")

const Products = require('../models/productsSchema');
const User = require('../models/userSchema');

//get Productsdata api
router.get("/getproducts", async (req, res) => {
    try {
        const productsdata = await Products.find()
        console.log("ProductData", productsdata);
        res.status(201).json(productsdata);
    } catch (error) {
        console.log("error", error.message)
    }
})

//get individual data id
router.get("/getproductone/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const individualData = await Products.findOne({ id: id })
        console.log("individualData", individualData);

        res.status(201).json(individualData);


    } catch (error) {
        res.status(400).json(individualData);

        console.log("error", error.message)
    }
});


// register the data
router.post("/register", async (req, res) => {
    console.log(req.body);
    const { fname, email, mobile, password, cpassword } = req.body;

    if (!fname || !email || !mobile || !password || !cpassword) {
        res.status(422).json({ error: "filll the all details" });
        console.log("bhai nathi present badhi details");
    };

    try {

        const preuser = await User.findOne({ email: email });
        console.log('preuser', preuser)

        if (preuser) {
            res.status(422).json({ error: "This email is already exist" });
        } else if (password !== cpassword) {
            res.status(422).json({ error: "password are not matching" });;
        } else {

            const finaluser = new User({
                fname, email, mobile, password, cpassword
            });

            // yaha pe hasing krenge

            const storedata = await finaluser.save();
            console.log(storedata + "user successfully added");
            res.status(201).json(storedata);
            // console.log("storeData", storedata)
        }

    } catch (error) {
        console.log("error the bhai catch ma for registratoin time" + error.message);
        res.status(422).send(error);
    }

});

//login api

// login data
router.post("/login", async (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ error: "fill the details" });
    }

    try {

        const userlogin = await User.findOne({ email: email });
        console.log(userlogin, "success UserLogin");
        if (userlogin) {
            const isMatch = await bcrypt.compare(password, userlogin.password);
            console.log(isMatch);

            if (!isMatch) {
                res.status(400).json({ error: "invalid crediential pass" });
            } else {

                //cookie and secretkey of token for login session storage of particular user

                const token = await userlogin.generatAuthtoken();
                console.log(token);

                //cookie generation

                res.cookie("eccomerce", token, {
                    expires: new Date(Date.now() + 900000),
                    httpOnly: true
                });
                res.status(201).json(userlogin);
            }

        } else {
            res.status(400).json({ error: "user not exist" });
        }

    } catch (error) {
        res.status(400).json({ error: "invalid crediential pass" });
        console.log("error the bhai catch ma for login time" + error.message);
    }
});

//adding data into cart
router.post("/addcart/:id",authenticate, async (req, res) => {
    try {
        const { id } = req.params;
        const cart = Products.findOne({ id: id })
        console.log("cart Value", cart)
        console.log("********", id, req.userID)

        const userContact = await User.findOne({ _id: req.userID})
        console.log(userContact, "userContact");

        if (userContact) {

            //if I comment below 3 loc addtocart api works fine!
            const cartdata =await userContact.addcartdata(cart)
            await userContact.save();
            // console.log("cartData", cartdata)
            res.status(201).json(userContact)
        } else {
            res.status(401).json({ error: "invalid User" })
        }
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;