const express = require('express');
const UserModel = require('../Models/Movie.js');


const handleAllMovies = (app) =>{
    app.route('/api/movies')
    .get(function(req,resp){
        /*const response = async function (){
            UserModel.find({},function(err,data){
                resp.json(data);*/
                resp.json({message:"hi"});
            });
        };

        //resp.json(response);
    


module.exports={
    handleAllMovies
};