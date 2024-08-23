const mongoose = require("mongoose");
const {Schema, model}= mongoose

const newsSchema= new Schema({
 user:{
    type: mongoose.Schema.Types.ObjectId, 
     ref: 'user',
  },
  UserProfileImg:{
    type:String,
    default:""
  },
  news_Image:  {
    type: String,
  },
  heading:{
    type: String,
    required: true
  },
  Country:{
    type:String,
    requied:true
  },
  likes:{
    type:[mongoose.Schema.Types.ObjectId],
    ref:'user',
    default:[]
  },
  report:{
    type:Number,
    default:0,
  },
  Content: {
    type: String,
    required: true,
  },
  Category: {
    type: String,
    require:true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports= model('News', newsSchema)