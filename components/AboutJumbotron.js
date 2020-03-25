import { Jumbotron, Row, Col, Container, ListGroup } from 'react-bootstrap';

export default function (){
    return(
    <div>
    
    <Jumbotron>
    <Container>
        <h1>About</h1>
        <p>The project is designed and create a website following a MERN stack (Mongo DB, Express, React and Node,js).
            By retrieving movies data from an API build from scratch, the users are able to browse through
            a list of movies, select favorites and filter their search. 
        </p>
        </Container>
    </Jumbotron>
    
    <Container>
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

        <ListGroup variant='flush'>
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
        

        <h1 className='blog-post'>Github Link</h1>
        <a href='https://github.com/pnava589/Node-Assignment-II'>Repo</a>

        <br/>
        <hr/>
        <h1 className='blog-post'>Technologies Used</h1>

        <ListGroup variant='flush'>
            <ListGroup.Item >Bootstrap</ListGroup.Item>
            <ListGroup.Item >Mongo DB </ListGroup.Item>
            <ListGroup.Item >Next JS</ListGroup.Item>
            <ListGroup.Item >Node JS (Express, Mongoose, Passport)</ListGroup.Item>
            <ListGroup.Item >React JS</ListGroup.Item>
            
            
        </ListGroup>

    </Container>

  

    </div>
    );
}

