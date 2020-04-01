import { Container, Row, Col, Table } from 'react-bootstrap';
import { useEffect, useState, Component } from "react";
import SingleFavorite from './SingleFavorite';



class Favorites extends React.Component{
constructor(props){
    super(props);
    this.state={favorites:this.props.data};
}

/*static getDerivedStateFromProps(nextProps,prevState){
    return{favorites:nextProps.data};
}*/

componentDidUpdate(){
   
}
render(){
    let list = [];
    for(let item in this.props.data){list.push(item);}
    console.log(list);
    return(
    <Row className="text-white">
        <Col className="col-md-1 align-self-center text-center text-dark">
        {list.map(item =>
            <SingleFavorite key={item.id}
                            id={item.id}
                            title={item.title}
                            poster={item.poster}/>)}
        
      
        </Col>
    </Row>
    );
    }
}



export default Favorites;