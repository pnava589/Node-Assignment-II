import { Container, Row, Col, Table } from 'react-bootstrap';
import { useEffect, useState, Component } from "react";
import SingleFavorite from './SingleFavorite';
import fetch from 'isomorphic-unfetch';



class Favorites extends React.Component{
constructor(props){
    super(props);
    this.state={favorites: this.props.favorites};
}


render(){
    return(
    <Row className="text-white">
        <Col className="col-md-1 align-self-center text-center text-dark">
        {this.state.favorites.map(favorites=><p key={favorites.id}>{favorites.title}</p>)}
        </Col>
    </Row>
    );
    }
}



export default Favorites;