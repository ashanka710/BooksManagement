const {mongoose}=require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId


const bookSchema= new mongoose.Schema({
    title: {type: String, required :true,unique:true, trim:true},
  excerpt: {type: String, required :true, trim:true}, 
  userId: {type: ObjectId, ref: 'UserCollection', require :true },
  ISBN: {type: String, required :true, trim:true, unique:true},
  category: {type: String, required :true, trim:true},
  subcategory:  [{ type: String, required: true }],
  reviews: {type: Number, default: 0},
  deletedAt: { type: Date}, 
  isDeleted: {type:Boolean, default: false},
  releasedAt: {type:Date, required: true},
},{timeStamps: true})

module.exports= mongoose.model("BookCollection",bookSchema)