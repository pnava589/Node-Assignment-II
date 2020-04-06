
import { Jumbotron, Row, Col, Container, ButtonGroup,ToggleButton,Button} from 'react-bootstrap';
import {useState} from 'react';

export default function Sort (props){

return(

<> 
 <Row>
    <Col lg={2} className='m-3'><h5>Sort By:</h5></Col>
    <Col className='m-3'>
    <ButtonGroup toggle onChange={props.sortBy}>
    <ToggleButton type="radio" name="title" defaultChecked value='title'>
      Ttitle
    </ToggleButton>
    <ToggleButton type="radio" name="year" value="year" >
      year
    </ToggleButton>
    <ToggleButton type="radio" name="rating" value="rating" >
      Rating
    </ToggleButton>
  </ButtonGroup>
  </Col>
  </Row>
  <br/>
  <hr/>
  <br/>
    
</>
    )
}