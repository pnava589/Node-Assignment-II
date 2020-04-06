
import { Jumbotron, Row, Col, Container, ListGroup,Modal,Button} from 'react-bootstrap';
import {useState,useEffect} from 'react';
import fetch from 'unfetch';

export default function Profiledisplay(props) {

    const [profile,setProfile] = useState(props.profile);
    const [display,setDisplay] = useState(false);
    

        return(
            <>
            <div className="mr-2">
                    <Button onClick={()=>setDisplay(true)}>Profile</Button>
            </div>
            <Modal
            show={display} 
            onHide={()=>setDisplay(false)}
            size="lg">
            
            <Modal.Header closeButton>
                <h1>Profile</h1>
            </Modal.Header>
            {profile ? <img src={JSON.stringify(props.profile.picture)} className='rounded-circle'/> : <div>Loading...</div>}
            <Modal.Footer>
                <Button onClick={()=>setDisplay(false)}>
                    Close
                </Button>
            </Modal.Footer>
            </Modal>
            </>

        );
}

