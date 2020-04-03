import { Card, Col, Nav, Row } from "react-bootstrap";
import CastMembers from './CastMembers';
import CrewMembers from './CrewMembers';
class CastCrewList extends React.Component{
    constructor(props){
        super(props);
        this.state = {show: "cast", movie: this.props.movie[0]}
    }
    castSelection = (eventKey)=>{
        this.setState({show: eventKey});
    }
    render(){
        return(
            <Card as={Col} className={this.props.className}>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="cast" onSelect={this.castSelection}>
                        <Nav.Item>
                            <Nav.Link eventKey="cast" href="#cast">Cast</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="crew" href="#crew">Crew</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body style={{overflowY: 'scroll'}}>
                    <Row style={{height: '72vh'}}>
                        <Col xs={12}>
                        {this.state.show == "cast" && <CastMembers view={this.props.view} cast={this.state.movie.production.cast}/>}
                        {this.state.show == "crew" && <CrewMembers crew={this.state.movie.production.crew}/>}
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}
export default CastCrewList;