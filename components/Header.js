import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFilm} from '@fortawesome/free-solid-svg-icons';

export default function Header(){
    return(
        <Navbar bg="dark" sticky="top" className="justify-content-between">
            <Nav.Link href="/home">
                <FontAwesomeIcon icon={faFilm}/>
                <i className="text-monospace"> JP Movies</i>
            </Nav.Link>
            <Button >
                About
            </Button>
        </Navbar>
    );
}