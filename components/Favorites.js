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
    console.log(JSON.stringify(this.props.data));
    const list=[];
    for(let item in this.props.data){list.push(item);}
    list.forEach(item => console.log(item));
}

render(){
    const {data} = this.props;
    if(data.length>1){}
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