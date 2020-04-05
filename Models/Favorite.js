const mongoose = require ('mongoose');

const favoriteSchema = new mongoose.Schema({
    
   id:Number,
   poster:String,
   title:String


});

module.exports=mongoose.model('Favorite',favoriteSchema,'favorites');