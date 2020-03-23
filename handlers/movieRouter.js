const express = require('express');
const router = express.Router();
const MovieModel = require('../Models/movie.js');
const BriefMovieModel = require('../Models/alternativeMovie');
const helper = require('./helper.js');


router.get('/find/title/:substring', helper.ensureAuthenticated, async(req,resp)=>{
    try{
        
        const matchMovies = await MovieModel.find({title: new RegExp(req.params.substring)});
        if(matchMovies){
            resp.json(matchMovies);
        }
        else{
            resp.json({msg:"not matches found"});
        }
      
    }
    catch(error){
        console.log(error);
        }  
    });

    router.get('/movies', helper.ensureAuthenticated, async(req,resp)=>{
        try{
       
            const allMovies = await MovieModel.find({});
            if(allMovies){
                resp.json(allMovies);
            }
            else{
                resp.json({message:"could not find all movies"});
            }
        }
        catch(error){
            console.log("does not work");
            console.log(error);
        }    
    });


    router.get('/movies/:id', helper.ensureAuthenticated, async(req,resp)=>{
        try{
            
           const matchMovies = await MovieModel.find({id:req.params.id});
           if(matchMovies){
               resp.json(matchMovies);
           }
           else{
               resp.json({message:"could not find movie"});
           }
        }
        catch(error){
            console.log(error);
            }  
        });

        router.get('/brief', helper.ensureAuthenticated, async(req,resp)=>{
            try{
                
               const matchMovies = await BriefMovieModel.find({});
               if(matchMovies){
                   resp.json(matchMovies);
               }
               else{
                   resp.json({message:"could not find movie"});
               }
            }
            catch(error){
                console.log(error);
                }  
            });
    
            router.get('/find/rating/:r1/:r2', helper.ensureAuthenticated, async(req,resp)=>{
                try{
                    
                   const matchMovies = await MovieModel.find({"ratings.average":
                   {$gt:req.params.r1}, "ratings.average":{$lt:req.params.r2}});
                   if(matchMovies){
                       resp.json(matchMovies);
                   }
                   else{
                       resp.json({message:"could not find movies"});
                   }
                }
                catch(error){
                    console.log(error);
                    }  
                });
        
            
                router.get('/find/year/:y1/:y2', async(req,resp)=>{
                    try{
                        const y1 = new Date(req.params.y1);
                        const y2 = new Date(req.params.y2);
                       const matchMovies = await MovieModel.aggregate([{
                           $addFields:{
                               convertedDate:{$toDate:'$release_date'}
                           }
                       },
                    
                    {
                        '$match':
                        {
                            'convertedDate':
                            {
                                '$gte':y1,
                                '$lte':y2
                            }
                        }
                    }
                    ]);

                        resp.json(matchMovies);
                    }
                    catch(error){
                        console.log(error);
                        }  
                    });
            
    

module.exports=router;
        

    

