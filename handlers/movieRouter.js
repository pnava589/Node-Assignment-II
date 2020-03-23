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
    
            router.get('/find/:y1/:y2', helper.ensureAuthenticated, async(req,resp)=>{
                try{
                    
                   const matchMovies = await MovieModel.find({release_date:req.params.id});
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
        

    

module.exports=router;
        

    


