const express= require("express")
const router= express.Router()
const News= require('../Models/NewsSchema')

router.get('/fetchAllNews/:country/:Category', async (req,res)=>{
    if(req.params.Category!=="none"){
        try{
            const news= await News.find({Country:req.params.type, Category:req.params.Category})
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
        const news= await News.find({Country:req.params.type})
        res.status(200).json(news)
    }catch(err){
        console.error(err.message);
        res.status(500).json({ errors: "Internal Server Error" });
    } 
})

router.get('/ForYou', (req,res)=>{
    console.log(req.params)
    res.send("for u");

})
router.get('/query', (req,res)=>{
    console.log(req.params)
    res.send("your query");

})


module.exports= router