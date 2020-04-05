import { Row, Col, Button, Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';


const deleteFavorite = async(id) =>{
    try{
        const options ={
        method:'DELETE',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({"id":id})
        };
        //console.log(options.body);
        
        const resp = await fetch('/api/favorites',options);
        const data = await resp.json();
        //console.log(data);
        }
        catch(err){
            console.log('delete error: '+err);
        }
}

const SingleFavorite=(props)=>{
    const [favorite,setFavorite] = useState(props);
    
    
    useEffect(()=>{
        setFavorite(props)
    },[props])
    
    return(
                <Col className="col-md-1 align-self-center">
                    <Button className="close" aria-label="Close" onClick={() =>deleteFavorite(props.id).then(props.getFavorites)}>
                        <span aria-hidden="true">&times;</span>
                    </Button>
                    <img className="img-thumbnail" src={`https://image.tmdb.org/t/p/w92${props.poster}`} alt={props.title} title={props.title}/>
                </Col>
           
    );
    
    }
    export default SingleFavorite;