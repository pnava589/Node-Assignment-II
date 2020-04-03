import { Container, Row, Col, Button } from 'react-bootstrap';
import { useEffect, useState, Component } from "react";
import SingleFavorite from './SingleFavorite';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Collapse from 'react-bootstrap/Collapse';



class Favorites extends React.Component{
constructor(props){
    super(props);
    this.state={favorites:this.props.favorites,show:true};
}
componentDidUpdate(prevProps) {
    if (this.props.favorites.length !== prevProps.favorites.length) {
      this.setState({favorites: this.props.favorites});
    }
  }


componentDidMount(){
    //console.log('favorites mounts');
    
}

render(){
    return(
    <div className='col-md-12 m-1'>
      <Collapse in={this.state.show}>
      <Row className="text-white" id='favRow'>
        
          <Col className='col-md-1 align-self-center text-center text-dark'><h5>Favorites</h5></Col>
          {this.state.favorites.map(item => <SingleFavorite key={item.id}
                                                            id={item.id}
                                                            poster={item.poster}
                                                            title={item.title}
                                                            getFavorites={this.props.getFavorites}/>)}
      </Row>
      </Collapse>
      <Button
          onClick={()=>this.setState({show:!this.state.show})}
          aria-controls='favRow'
          aria-expanded={this.state.show}
          >
          {this.state.show && <FontAwesomeIcon icon='angle-double-up'/>}
          {!this.state.show && <FontAwesomeIcon icon='angle-double-down'/>}
      </Button>
      </div>
    );
    }
}



export default Favorites;


