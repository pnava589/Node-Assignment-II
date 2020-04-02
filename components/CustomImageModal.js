import { Tooltip, OverlayTrigger, Modal, Button, Container, Row, Col } from 'react-bootstrap';
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
            <div>
                <OverlayTrigger
                placement="right"
                overlay={renderTip}>
                    <img src={this.state.smUrl} onClick={this.show}/>
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
            </div>
        )
    }
}
export default CustomModal;