import { Container, Row, Col, Table } from 'react-bootstrap';
import { useEffect, useState, Component } from "react";
import SingleFavorite from './SingleFavorite';
import fetch from 'isomorphic-unfetch';



class Favorites extends React.Component{
constructor(props){
    super(props);
    this.state={favorites:this.props.favorites};
}
componentDidUpdate(prevProps) {
    console.log(this.props.favorites);
    if (this.props.favorites.length !== prevProps.favorites.length) {
      this.setState({favorites: this.props.favorites});
    }
  }


componentDidMount(){
    console.log('does it get here?');
    console.log(JSON.stringify(this.props.data));
}


    
    
render(){
    const {data} = this.props;
    return(
    
    <Row className="text-white">
        
        <Col className='col-md-1 align-self-center text-center text-dark'><h5>Favorites</h5></Col>
        {this.state.favorites.map(item => <SingleFavorite key={item.id}
                                                          id={item.id}
                                                          poster={item.poster}
                                                          title={item.title}/>)}
       
    </Row>
    );
    }
}



export default Favorites;