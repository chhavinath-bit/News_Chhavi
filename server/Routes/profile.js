const express = require("express");
const router = express.Router();
const FetchUser = require("../MIddleWare/FetchUser");
const News= require('../Models/NewsSchema')
const User = require("../Models/UserSchema");

router.get("/Userprofile/:id", FetchUser, async (req, res) => {
  try{
   const news= await News.find({user: req.user._id})
   console.log(news)
   res.status(200).json({following:req.user.following, followers: req.user.followers, news, profilePhoto: req.user.profilePhoto, name : req.user.name })
   return
  }catch(err){
    res.status(500).json({ errors: "Internal Server Error" });
  }

  res.send(req.user)
});
router.put("/UpdateUser", async (req, res) => {
  console.log(req.body);
  const DataToUpdate = req.body;
  const getUser = await User.findByIdAndUpdate(
    req.body._id,
    { $set: { ...DataToUpdate } },
    { new: true }
  );
  console.log(getUser);
  res.json({ ok: "ok" });
});
router.get("/following", (req, res) => {

});
router.post("/follows", (req, res) => {
  
});

module.exports = router;
