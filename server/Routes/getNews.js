const express= require("express")
const router= express.Router()
const News= require('../Models/NewsSchema')
const FetchUser = require("../MIddleWare/FetchUser")

router.get('/fetchAllNews/:country/:Category', async (req,res)=>{
   
    if(req.params.Category!=="none"){
        try{
            const news= await News.find({Country:req.params.country, Category:req.params.Category})
            res.status(200).json(news);
            return;}catch(err){
               console.error(err.message);
               res.status(500).json({ errors: "Internal Server Error" });
            }
    }
    if(req.params.country==="World"){
        try{
         const news= await News.find()
         res.status(200).json(news);
         return;}catch(err){
            console.error(err.message);
            res.status(500).json({ errors: "Internal Server Error" });
         }c
    }
    try{
        const news= await News.find({Country:req.params.country})
        res.status(200).json(news)
    }catch(err){
        console.error(err.message);
        res.status(500).json({ errors: "Internal Server Error" });
    } 
})

router.get('/ForYou/:id', FetchUser, async (req,res)=>{

    const two_dimension_news= await Promise.all(
        req.user.following.map(async (_id) => {
            return await News.find({ user: _id });
        })
    );
    const NewsForYou= two_dimension_news.flat();
    res.status(200).json(NewsForYou)

})
router.get('/query', (req,res)=>{
    console.log(req.params)
    res.send("your query");

})


module.exports= router