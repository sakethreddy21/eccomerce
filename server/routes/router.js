const express = require("express");
const router = new express.Router()
const Products = require('../models/productSchema');
const User = require('../models/userSchema');
const bcrypt = require("bcryptjs");
const authenicate= require("../middleware/authenticate")



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
      console.log(userlogin + "user value");
      if (userlogin) {
          const isMatch = await bcrypt.compare(password, userlogin.password);
          console.log(isMatch);

        // token generate
          const token =await userlogin.generateAuthtoken()
          //console.log(token) 
          res.cookie("Amazonweb",token,{
            expires:new Date(Date.now()+ 900000),
            httpOnly:true
          })

          if (!isMatch) {
              res.status(400).json({ error: "invalid crediential pass" });
          } else {
              res.status(201).json({error:"password match"});
          }

      } else{
        res.status(400).json({error:"invalid details"})
      }

  } catch (error) {
      res.status(400).json({ error: "invalid crediential pass" });
      console.log("error the bhai catch ma for login time" + error.message);
  }
});

// adding the data to cart

router.post("/addcart/:id", authenicate, async (req, res) => {

  try {
      console.log("perfect 6");
      const { id } = req.params;
      const cart = await Products.findOne({ id: id });
      console.log(cart + "cart value");

      const Usercontact = await User.findOne({ _id: req.userID });
      console.log(Usercontact + "user milta hain");


      if (Usercontact) {
          const cartData = await Usercontact.addcartdata(cart);

          await Usercontact.save();
          console.log(cartData + " thse save wait kr");
          console.log(Usercontact + "userjode save");
          res.status(201).json(Usercontact);
      }else{
        res.status(401).json({error:"inavalid user"})
      }
  } catch (error) {
      console.log(error);
  }
});

// get data into the cart
router.get("/cartdetails", authenicate, async (req, res) => {
  try {
      const buyuser = await User.findOne({ _id: req.userID });
      console.log(buyuser + "user hain buy pr");
      res.status(201).json(buyuser);
  } catch (error) {
      console.log(error + "error for buy now");
  }
});

// get user is login or not
router.get("/validuser", authenicate, async (req, res) => {
  try {
      const validuserone = await User.findOne({ _id: req.userID });
      console.log(validuserone + "user hain home k header main pr");
      res.status(201).json(validuserone);
  } catch (error) {
      console.log(error + "error for valid user");
  }
});

//remove data from cart 
router.get("/remove/:id", authenicate, async (req, res) => {
  try {
      const { id } = req.params;

      req.rootUser.carts = req.rootUser.carts.filter((curel) => {
          return curel.id != id
      });

      req.rootUser.save();
      res.status(201).json(req.rootUser);
      console.log("iteam remove");

  } catch (error) {
      console.log(error + "jwt provide then remove");
      res.status(400).json(error);
  }
});


//logout 
router.get("/logout", authenicate, async (req, res) => {
  try {
      req.rootUser.tokens = req.rootUser.tokens.filter((curelem) => {
          return curelem.token !== req.token
      });

      res.clearCookie("eccomerce", { path: "/" });
      req.rootUser.save();
      res.status(201).json(req.rootUser.tokens);
      console.log("user logout");

  } catch (error) {
      console.log(error + "jwt provide then logout");
  }
});




module.exports= router;