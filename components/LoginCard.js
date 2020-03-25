import { Card, Row, Container, Form, Button, ButtonGroup, Col } from "react-bootstrap";

export default function(props){
    return(
        <Container>
            <Row className="justify-content-center">
                <Card className="text-center col-xs-6 col-md-4 col-lg-4">
                    <Card.Header as="h5">Login</Card.Header>
                    <Card.Body >
                        <Form action="/login" method="post">
                            <Form.Group as={Row}controlId="formLogin">
                                <Form.Label className='text-left' column sm={12}>Email Address</Form.Label>
                                <Col sm={12}>
                                    <Form.Control name="email" type="email" placeholder="E.g. al@ace.ca"/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPassword">
                                <Form.Label className='text-left' column sm={12}>Password</Form.Label>
                                <Col sm={12}>
                                    <Form.Control name="password" type="password" placeholder="E.g. mypassword"/>
                                </Col>
                            </Form.Group>
                            <Button type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
}