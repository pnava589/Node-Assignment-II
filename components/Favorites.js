import { Container, Row, Col, Table } from 'react-bootstrap';
import { useEffect, useState, Component } from "react";
import SingleFavorite from './SingleFavorite';
import fetch from 'isomorphic-unfetch';



class Favorites extends React.Component{
constructor(props){
    super(props);
    this.state={favorites:this.props.data};
}



componentDidMount(){
    console.log('does it get here?');
    console.log(JSON.stringify(this.state.favorites));
    const list=[];
    for(let item in this.state.favorites){list.push(item);}
    list.forEach(item => console.log(item));
}

render(){
    const {data} = this.props;
    return(
    <Row className="text-white">
        <Col className="col-md-1 align-self-center text-center text-dark">
        {JSON.stringify(this.props.data)}
        
        </Col>
    </Row>
    );
    }
}



export default Favorites;