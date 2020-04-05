import { Jumbotron, Row, Col, Container, ListGroup,Modal,Button} from 'react-bootstrap';
import {useState} from 'react';


export default function About (props){
    
    const [display,setDisplay] = useState(false);
    const [style,setStyle] = useState({height: 'inherit',overflowY: "scroll", overflowX: "hidden"});
    
   
    return(
    <div>
    <Button onClick={()=>setDisplay(true)}>About</Button>
    <Modal
    show={display} 
    onHide={()=>setDisplay(false)}
    size="lg">
    
    <Jumbotron>

    <Container>
    <Modal.Header closeButton>
    <h1>About</h1>
    </Modal.Header>
        <p>The project is designed and create a website following a MERN stack (Mongo DB, Express, React and Node,js).
            By retrieving movies data from an API build from scratch, the users are able to browse through
            a list of movies, select favorites and filter their search. 
        </p>
        </Container>
    </Jumbotron>
    
    <Container className='ml-3'>
        <div className='blog-main'>
        <h1 className="blog-post">Team Members</h1>
        <ul>
            <li>Juan Jimenez</li>
            <li>Pedro Navas</li>
        </ul>
        </div>


        <br/>
        <hr/>
        
        <h1 className='blog-post'>Resources</h1>

        <ListGroup variant='flush' className='pr-4'>
            <ListGroup.Item ><b>Bootstrap Documentation</b></ListGroup.Item>
            <ListGroup.Item variant='light'>Acted as a main source for our styiling. For more information <a href='https://getbootstrap.com/docs/4.1/getting-started/introduction/'>click here</a></ListGroup.Item>
            <ListGroup.Item ><b> Next JS docs</b></ListGroup.Item>
            <ListGroup.Item variant='light'>Acted as a main source for implementing Next and rendering React from a server. Fore more information <a href='https://nextjs.org/docs/getting-started'>click here</a></ListGroup.Item>
            <ListGroup.Item ><b>Mongo Operators Documentation</b></ListGroup.Item>
            <ListGroup.Item variant='light'>Reference used to get more information regarding operators for queries in Mongo. For more information <a href='https://docs.mongodb.com/manual/reference/operator/'>click here</a></ListGroup.Item>
            <ListGroup.Item ><b>React-transition-group</b></ListGroup.Item>
            <ListGroup.Item variant='light'>Reference used to install and define transition of modules. For more information <a href='https://reactcommunity.org/react-transition-group/'>click here</a></ListGroup.Item>
        </ListGroup>
        <br/>
        
        <h1 className='blog-post'>API URLs</h1>

        <ListGroup variant='flush' className='pr-4'>
            <ListGroup.Item ><b>API for all Movies</b></ListGroup.Item>
            <ListGroup.Item variant='light'><a href='/api/movies'>/api/movies</a><p>Finds all movies</p></ListGroup.Item>
            <ListGroup.Item ><b> Movie by id</b></ListGroup.Item>
            <ListGroup.Item variant='light'> <a href='/api/movies/20'>/api/movies/id </a><p>(Finds a movie by specifying an id. Here, the default id is 20, change the id in the url to find information of another movie)</p></ListGroup.Item>
            <ListGroup.Item ><b>Brief Movies</b></ListGroup.Item>
            <ListGroup.Item variant='light'><a href='/api/brief'>/api/brief</a><p>Finds all movies from an abbreviated collection</p></ListGroup.Item>
            <ListGroup.Item ><b>Find movies by title substring</b></ListGroup.Item>
            <ListGroup.Item variant='light'><a href='/api/find/title/love'>/api/find/title/substring </a><p>(Finds movies that contain the substring in their title. Here, the substring is "love". To get different results, change 'love' for other substring)</p></ListGroup.Item>
            <ListGroup.Item ><b>Find movies by year range</b></ListGroup.Item>
            <ListGroup.Item variant='light'><a href='/api/find/year/2000/2010'>/api/find/year/y1/y2 </a><p>(Finds movies released between two given years. Here, the years are 2000 and 2010. To get other results change y1 and/or y2)</p></ListGroup.Item>
            <ListGroup.Item ><b>Find movies by rating range</b></ListGroup.Item>
            <ListGroup.Item variant='light'><a href='/api/find/rating/5/7'>/api/find/rating/r1/r2 </a><p>(Finds movies with ratings between two given years. Here, the ratings are 5 and 7. To get other results change r1 and/or r2)</p></ListGroup.Item>
        </ListGroup>
 

        <br/>
        
        <h1 className='blog-post'>Technologies Used</h1>

        <ListGroup variant='flush' className='pr-4'>
            <ListGroup.Item >Bootstrap</ListGroup.Item>
            <ListGroup.Item >Mongo DB </ListGroup.Item>
            <ListGroup.Item >Node JS (Express, Mongoose, Passport, Isomorphic-unfetch, FontAwesomeIcon)</ListGroup.Item>
            <ListGroup.Item >React JS (react-bootstrap, useState)</ListGroup.Item>
            
            
        </ListGroup>


        <br/>
        <h1 className='blog-post'>Github Link</h1>
        <a href='https://github.com/pnava589/Node-Assignment-II'>Repo</a>
        <br/>
        <Modal.Footer>
            <Button onClick={()=>setDisplay(false)}>
                Close
            </Button>
        </Modal.Footer>

    </Container>

  

    </Modal>
    </div>
    );
}

