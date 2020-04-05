const mongoose = require ('mongoose');

const movieSchema = new mongoose.Schema({
    
    id: Number,
    tmdb_id: Number,
    imdb_id: String,
    release_date: String,
    title: String,
    runtime: Number,
    revenue: Number,
    tagline: String,
    poster: String,
    ratings: {
    popularity:Number,
    average: Number,
    count:Number
    },
    overview:String

});

module.exports=mongoose.model('AlternativeMovie',movieSchema,'movies-brief');