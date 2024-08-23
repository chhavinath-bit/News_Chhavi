const express = require("express");
const router = express.Router();
const FetchUser = require("../MIddleWare/FetchUser");
const News = require("../Models/NewsSchema");
router.post("/postnews", FetchUser, async (req, res) => {
  const { heading, Country, Content, tag } = req.body;
  const newPost = new News({
    heading,
    Country,
    Content,
    tag,
    user: req.user._id,
  });
  const saveNews = await newPost.save();
  console.log(saveNews);
  res.send(200);
});
router.put("/updatenews/:id", (req, res) => {
  console.log(req.params);
  res.send("Update");
});
router.delete("/deletenews/:id", async (req, res) => {
  try {
    let audio = await News.findById(req.params.id);

    if (!audio) {
      return res.status(404).send("Not Found");
    }
    let des = audio.description;
    // if (audio.user.toString() !== req.user.id) {
    //   return res.status(401).send("unauthorized");
    // }

    audio = await News.findByIdAndDelete(req.params.id);
    res.status(200).json({ sucess: "News Post Deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ errors: "Internal Server Error" });
  }
});
router.post("/likes/:id", () => {
  console.log(req.params);
  res.send("your category");
});

module.exports = router;
