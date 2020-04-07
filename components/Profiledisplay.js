
import { Jumbotron, Row, Col, Container, ListGroup,Modal,Button, Image} from 'react-bootstrap';
import {useState,useEffect} from 'react';
import fetch from 'isomorphic-unfetch';



class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: {},
            show: false,
            img: ''
        }
    }
    componentDidMount=async()=>{
        const res = await fetch('/api/profile');
        const data = await res.json();
        this.setState({
            data: data,
            img: data.picture.large
        });
    }
    show=()=>{
        this.setState({show: true})
    }
    hide=()=>{
        this.setState({show: false})
    }
    render(){
        return(
            <>
            <div className="mr-2">
                    <Button onClick={this.show}>Profile</Button>
            </div>
            <Modal
            show={this.state.show} 
            onHide={this.hide}
            size="lg">
            
            <Modal.Header closeButton>
                <h1>Profile</h1>
            </Modal.Header>
            <Modal.Body>
                <Image src={this.state.img}/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.hide}>
                    Close
                </Button>
            </Modal.Footer>
            </Modal>
            </>
        );
    }
}
export default Profile;