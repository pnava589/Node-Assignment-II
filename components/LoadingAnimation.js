import {Spinner, Modal, Container, Row, Col} from 'react-bootstrap';
const LoadingAnimation =(props)=>{
    return(
        <Modal
        size="sm"
        show={props.show}
        >
            <Container>
                <Modal.Title className="text-center">Loading...</Modal.Title>
                <Modal.Body as={Row} className="justify-content-center">
                    <Col xs={3}>
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </Col>
                </Modal.Body>
            </Container>
        </Modal>
    );
}
export default LoadingAnimation