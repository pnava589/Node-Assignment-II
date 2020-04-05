const express = require('express');
const router = express.Router();
const MovieModel = require('../Models/Movie.js');
const BriefMovieModel = require('../Models/alternativeMovie.js');
const userModel = require('../Models/User.js');
const helper = require('./helper.js');



router.post('/favorites', helper.ensureAuthenticated, async(req,resp)=>{
    console.log('is posting');
    try{
        const newFavorite = await userModel.updateOne(
            {email:req.user.email},
            {
                $addToSet:{favorites:{'id':req.body.id,'poster':req.body.poster,'title':req.body.title}}
            }
        );
        resp.status(201).json(newFavorite);
    }
    catch(err){
        resp.status(400).json({message:err.message})
    }
});

router.get('/favorites', helper.ensureAuthenticated, async(req,resp)=>{
  
    try{
        
        let query = {email:req.user.email};
        const allFavorites = await userModel.findOne(query,{favorites:1});
        if(allFavorites){
            resp.json(allFavorites);
        }
        else{
            resp.json({message:"could not find all favorites"});
        }
    }
    catch(err){
        resp.status(400).json({message:err.message})
    }
});

router.delete('/favorites', helper.ensureAuthenticated, async(req,resp)=>{
    console.log('is deleteing');
    try{
        const newFavorite = await userModel.updateOne(
            {email:req.user.email},
            {
                $pull:{favorites:{id:req.body.id}}
            }
        );
        resp.status(201).json(newFavorite);
    }
    catch(err){
        resp.status(400).json({message:err.message})
    }
});




router.get('/find/title/:substring', helper.ensureAuthenticated, async(req,resp)=>{
    try{
        
        const matchMovies = await BriefMovieModel.find({title: new RegExp(req.params.substring,'i')});
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
            router.get('/find/rating/under/:r1', helper.ensureAuthenticated, async(req,resp)=>{
                try{
                    
                   const matchMovies = await BriefMovieModel.find({ "ratings.average":{$lt:req.params.r1}});
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
            router.get('/find/rating/over/:r1', helper.ensureAuthenticated, async(req,resp)=>{
                    try{
                        
                       const matchMovies = await BriefMovieModel.find({ "ratings.average":{$gt:req.params.r1}});
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
            router.get('/find/rating/:r1/:r2', helper.ensureAuthenticated, async(req,resp)=>{
                try{
                    
                   const matchMovies = await BriefMovieModel.find({"ratings.average":
                   {$gt:req.params.r1, $lt:req.params.r2}});
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
        
                router.get('/find/year/after/:y1', helper.ensureAuthenticated, async(req,resp)=>{
                    try{
                        const y1 = new Date(req.params.y1);
                       const matchMovies = await BriefMovieModel.aggregate([{
                           $addFields:{
                               convertedDate:{$toDate:'$release_date'}
                           }
                       },
                    
                    {
                        '$match':
                        {
                            'convertedDate':
                            {
                                '$gte':y1
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
                router.get('/find/year/before/:y1', helper.ensureAuthenticated, async(req,resp)=>{
                        try{
                            const y1 = new Date(req.params.y1);
                           const matchMovies = await BriefMovieModel.aggregate([{
                               $addFields:{
                                   convertedDate:{$toDate:'$release_date'}
                               }
                           },
                        
                        {
                            '$match':
                            {
                                'convertedDate':
                                {
                                    '$lte':y1
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
                router.get('/find/year/:y1/:y2', helper.ensureAuthenticated, async(req,resp)=>{
                    try{
                        const y1 = new Date(req.params.y1);
                        const y2 = new Date(req.params.y2);
                        const matchMovies = await BriefMovieModel.aggregate([{
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
        

    
