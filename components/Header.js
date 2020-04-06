import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Button, ButtonGroup } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFilm} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import About from './About';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {display:false};
    }
  
    display =()=>{
        this.setState({display:true});
    }

    hide =()=>{
        this.setState({display:false});
    }
    render(){
        
        return(
        <Navbar bg="dark" sticky="top" className="justify-content-between">
            <Nav.Item>
                <Nav.Link href="/home">
                    <FontAwesomeIcon icon={faFilm}/>
                    <i className="text-monospace"> JP Movies</i>
                </Nav.Link> 
            </Nav.Item>
            <Nav.Item as={ButtonGroup}>
                <Link href="/movies">
                    <div className="mr-2">
                    <Button >Browse</Button>
                    </div>
                </Link>
                <About/>
            </Nav.Item>
        </Navbar>

        )
        
    };
}


export default Header;