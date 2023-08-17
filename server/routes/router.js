const express = require("express");
const router = new express.Router()
const Products = require('../models/productSchema');
const User = require('../models/userSchema');
const bcrypt = require("bcryptjs");




//get product api
router.get("/getproducts", async(req, res)=>{
  try {
    const productsdata = await Products.find()
    //console.log("console the data"+productsdata);
   res.status(201).json(productsdata)
  } catch (error) {
    console.log("error" + error.message);
  }
})


router.get("/getproductsone/:id", async(req, res)=>{
  try {
    const {id} = req.params;
    //console.log(id);

    const individualdata= await Products.findOne({id:id})
    res.status(201).json(individualdata)
  } catch (error) {
    res.status(400).json(individualdata);
    console.log("error" + error.message)
  }
})


//register data

router.post("/register", async (req, res) => {
  // console.log(req.body);
  const {fname,email,mobile,password,cpassword} = req.body;

  if (!fname || !email || !mobile || !password || !cpassword) {
      res.status(422).json({ error: "filll the all details" });
      console.log("bhai nathi present badhi details");
  };

  try {

      const preuser = await User.findOne({ email: email });

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
      }

  } catch (error) {
      console.log("error the bhai catch ma for registratoin time" + error.message);
      res.status(422).send(error);
  }

});


// login data
router.post("/login", async (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body;

  if (!email || !password) {
      res.status(400).json({ error: "fill the details" });
  }

  try {

      const userlogin = await User.findOne({ email: email });
      console.log(userlogin);
      if (userlogin) {
          const isMatch = await bcrypt.compare(password, userlogin.password);
          console.log(isMatch);

        // token generate
          const token =await userlogin.generateAuthtokenn()
          console.log(token) 

          if (!isMatch) {
              res.status(400).json({ error: "invalid crediential pass" });
          } else {
              res.status(201).json({error:"password match"});
          }

      } 

  } catch (error) {
      res.status(400).json({ error: "invalid crediential pass" });
      console.log("error the bhai catch ma for login time" + error.message);
  }
});





module.exports= router;