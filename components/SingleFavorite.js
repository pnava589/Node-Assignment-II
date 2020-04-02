import { Row, Col, Button, Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

const SingleFavorite=(props)=>{
    const [favorite,setFavorite] = useState(props);
    
    
    useEffect(()=>{
        setFavorite(props)
    },[props])
    
    return(
                <Col className="col-md-1 align-self-center">
                <img className="img-thumbnail" src={`https://image.tmdb.org/t/p/w92${props.poster}`} alt={props.title} title={props.title}/>
                </Col>
           
    );
    
    }
    export default SingleFavorite;