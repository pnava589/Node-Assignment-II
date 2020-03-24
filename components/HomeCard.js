import { Card, Row, Col, Container, Form, Button, ButtonGroup } from "react-bootstrap";

export default function(props){
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
                                <Form.Control type="text" placeholder="E.g. John Wick"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="ml-lg-5 pl-lg-1">
                            <Col sm={12} md={6} lg={6}>
                                <Button>Search Related Titles</Button>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <Button >Search All Movies</Button>
                            </Col>
                        </Form.Group>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
}