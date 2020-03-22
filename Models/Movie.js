const mongoose = require ('mongoose');

const movieSchema = new mongoose.Schema({
    _id:{type:mongoose.Schema.Types.ObjectId,ref:"Objectid"},
    id:Number,
    tmdb_id:Number,
    imdb_id:String,
    release_date:String,
    title:String,
    runtime:Number,
    revenue: Number,
    tagline:String,
    poster:String,
    ratings:{
        popularity:Number,
        average:Number,
        count:Number,
    },
    details:{
        overview:String,
        genres:[
            {
                id:Number,
                name:String,
            } 
        ],
        keywords:[
            {
                id:Number,
                name:String,
            }
        ]
    },

    production:{
        crew:[
            {
               credit_id:String,
               department:String,
               gender:Number,
               id:Number,
               job:String,
               name:String,
            }
        ],

        cast:[
            {
                cast_id:Number,
                character:String,
                credit_id:String,
                gender:Number,
                id:Number,
                name:String,
                order:Number,
            }
        ],

        companies:[
            {
               name:String,
               id:Number, 
            }
        ],

        countries:[
            {
                iso_3166_1:String,
                name:String
            }
        ]
    
    }

});

module.exports=mongoose.model('movies',movieSchema,"movies");