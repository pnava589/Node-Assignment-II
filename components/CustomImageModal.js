import { Tooltip, OverlayTrigger, Modal, Button, Container, Row, Col, Image } from 'react-bootstrap';
class CustomModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: false,
            smUrl: this.props.smUrl,
            lgUrl: this.props.lgUrl,
            label: this.props.label
        };
    }
    componentDidUpdate=(prevProps)=>{
        if (this.props.label!== prevProps.label) {
            this.setState({
                smUrl: this.props.smUrl,
                lgUrl: this.props.lgUrl,
                label: this.props.label
            });
          }
    }
    show=()=>{
        this.setState({show: true});
    }
    hide=()=>{
        this.setState({show: false});
    }
    render(){
        const renderTip = <Tooltip id="img-tooltip">
                            Click to enlarge image
                            </Tooltip>;
        return(
            <Col xs={12} lg={6}>
                <OverlayTrigger
                placement="right"
                overlay={renderTip}>
                    <Image src={this.state.smUrl} onClick={this.show} fluid/>
                </OverlayTrigger>
                <Modal
                show={this.state.show} 
                onHide={this.hide}
                size="lg">
                    <Container>
                        <Modal.Header closeButton>
                                <h5>{this.state.label}</h5>
                        </Modal.Header>
                        <Row>
                            <img className="col-sm-12" src={this.state.lgUrl} />
                        </Row>
                        <Modal.Footer>
                            <Button onClick={this.hide}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Container>
                </Modal>
            </Col>
        )
    }
}
export default CustomModal;