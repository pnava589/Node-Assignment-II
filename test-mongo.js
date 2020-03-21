const {MongoClient} = require('mongodb');
require('dotenv').config();

let client;
const connect= async()=>{
    
    setCLient();
    try{
        await client.connect({useUnifiedTopology: true});
        console.log('Connected to MongoDB...');
        
    }
    catch(error){
        console.log(error);
    }
   
}

const disconnect = async()=>{
    await client.close();
}

const setCLient = () =>{
    const url = process.env.MONGO_URL;
    client = new MongoClient(url,{useUnifiedTopology:true});
}
const getClient = ()=>{
    
    return client;
}

module.exports={connect,disconnect,getClient};


