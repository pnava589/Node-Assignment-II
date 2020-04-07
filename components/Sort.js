
import { Jumbotron, Row, Col, Container, ButtonGroup,ToggleButton,Button} from 'react-bootstrap';
import {useState} from 'react';

export default function Sort (props){


return(

<> 
 <Row className='ml-5 mr-3 mt-4'>
    <Col lg={1} className='m-3'><h3>Sort By:</h3></Col>
    <Col className='m-2'>
    <ButtonGroup toggle onChange={props.sortBy} size='lg'>
    <ToggleButton variant='outline-dark' type="radio" name="title"  value='title' style={{border:'none',borderBottom:'1px solid grey'}} >
      Title
    </ToggleButton>
    <ToggleButton variant='outline-dark' type="radio" name="year" value="year" className='ml-3' style={{border:'none',borderBottom:'1px solid grey'}}>
      Year
    </ToggleButton>
    <ToggleButton variant='outline-dark' type="radio" name="rating" value="rating" className='ml-3' style={{border:'none',borderBottom:'1px solid grey'}}>
      Rating
    </ToggleButton>
  </ButtonGroup>
  </Col>
  </Row>
  <hr className='mr-3 ml-3'/>
  
    
</>
    )
}