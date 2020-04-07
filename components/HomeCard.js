import { Card, Row, Col, Container, Form, Button, ButtonGroup } from "react-bootstrap";
import Link from 'next/link';
class HomeCard extends React.Component{
    constructor(props){
        super(props);
        this.state={value:''};
    }


    onChange=(e)=>{
        this.setState({value:e.target.value});
    }
    render(){
    return(
        <Container>
            <Row className="justify-content-center">
                <Card className="text-center w-50">
                    <Card.Header as="h5">Movie Browser</Card.Header>
                    <Card.Body >
                        <Form.Group as={Row} controlId="formTitle">
                            <Form.Label column sm={12} md={3} lg={2}>
                                Title
                            </Form.Label>
                            <Col sm={12} md={9} lg={10}>
                                <Form.Control type="text" placeholder="E.g. John" onChange={this.onChange}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="ml-lg-5 pl-lg-1">
                            <Col sm={12} md={6} lg={6}>
                               <Link href={{pathname:'/movies',query:{substring:this.state.value}}}> 
                                <Button onClick={this.props.show} disabled={!this.state.value} >Search Related Titles</Button>
                                </Link>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <Link href="/movies">
                                    <Button onClick={this.props.show}>Search All Movies</Button>
                                </Link>
                            </Col>
                        </Form.Group>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
  }
}
export default HomeCard;