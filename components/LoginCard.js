import { Card, Row, Container, Form, Button, ButtonGroup } from "react-bootstrap";

export default function(props){
    return(
        <Container>
            <Row className="justify-content-center">
                <Card className="text-center w-25">
                    <Card.Header as="h5">Login</Card.Header>
                    <Card.Body >
                        <Form>
                            <Form.Group controlId="formLogin">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="E.g. al@ace.ca"/>
                            </Form.Group>
                            <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="E.g. mypassword"/>
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