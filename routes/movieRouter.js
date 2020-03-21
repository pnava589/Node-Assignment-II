const express = require('express');
const router = express.Router();
const MovieModel = require('../Models/alternativeMovie.js');
const mongo = require('../test-mongo.js');
//mongo.connect();

router.get('/api/find/title/:substring', async(req,resp)=>{
    try{
        
        console.log('gets here');
        const client = mongo.getClient();
        console.log(`/${req.params.substring}/`);
        let result = await client.db("funwebdev").collection("movies").find({title: new RegExp(req.params.substring)});
        let list =[];
        if(result){
            while(await result.hasNext()){
                list.push(result.next());
            }
            resp.json(list);
            
        }
        else{
            resp.json({msg:`no matches for ${req.params.title}`});
        }
    }
    catch(error){
        console.log(error);
        }  
    });

    router.get('/api/movies', async(req,resp)=>{
        try{
       
        console.log('gets here for all movies');
        const client = mongo.getClient();
        
            let obj = await client.db("funwebdev").collection("movies").find();
            let list= [];
    
            if(obj){
                while(await obj.hasNext()){
                    list.push(obj.next());
                }
                resp.json(list);
                
            }
            else{
                resp.json({msg:`no matches for ${req.params.title}`});
            }
                
        }
        catch(error){
            console.log("does not work");
            console.log(error);
        }    
    });


        
        

    

module.exports=router;
        

    


