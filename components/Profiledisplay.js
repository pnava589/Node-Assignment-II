
import { Jumbotron, Row, Col, Container, ListGroup,Modal,Button, Image} from 'react-bootstrap';
import fetch from 'isomorphic-unfetch';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';

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
            img: data.picture.large,
            firstname:data.details.firstname,
            lastname:data.details.lastname,
            city:data.details.city,
            country:data.details.country,
            date_joined:data.membership.date_joined
        });
    }
    show=()=>{
        this.setState({show: true})
    }
    hide=()=>{
        this.setState({show: false})
    }
    render(){
        const style = { backgroundImage: `url(/chairs.jpg)`, 
                    backgroundSize: 'cover',     
                 };
        return(

            <>
            <div className="ml-2">
                    <Button onClick={this.show}>Profile</Button>
            </div>
            <Modal
            show={this.state.show} 
            onHide={this.hide}
            size="sm">
                
            <Row className='justify-content-center'>
            <Image src={this.state.img} className='rounded-circle' style={{zIndex:4,position:'absolute',top:'15%'}}/>
            </Row>
            <Jumbotron style={{backgroundImage: `url(/chairs.jpg)`,backgroundSize: 'cover',position:'relative'}}>
            <div style={{zIndex:1,position:'absolute'}}></div>
            </Jumbotron>
            
            <Modal.Body className='mt-4'>
            <Row className='justify-content-center'>
                <h3>{`${this.state.firstname}, ${this.state.lastname}`}</h3>
                
            </Row>

            <Row className='mt-2'>
                <Col>
                   <div className='justify-content-center'><FontAwesomeIcon icon={faMapMarkerAlt}/></div> <p>{`${this.state.country}, ${this.state.city}`}</p>
                </Col>

                <Col>
                <div className='justify-content-center'><FontAwesomeIcon icon={faClock}/></div><p>{this.state.date_joined}</p>
                </Col>
            </Row>

            
            
            </Modal.Body>
            <Modal.Footer className='justify-content-center'>
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