import { FormGroup, Row, Col, Form} from 'react-bootstrap'
class RangeInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: '5'};
    }
    render(){
        return(
            <Form.Group controlId={this.props.controlId}>
                <Form.Row>
                    <Form.Label column sm={2} md={2} lg={2} className="text-left align-middle align-text-middle">
                            Ratings
                    </Form.Label>
                    <Col sm={10} md={10} lg={2}>
                        <Form.Check type="radio" id="under" name="rating" label="Under"/>
                        <Form.Check type="radio" id="over" name="rating" label="Over"/>
                        <Form.Check type="radio" id="between" name="rating" label="Between"/>
                    </Col>
                    <Col sm={10} md={10} lg={3} >
                        <Form.Control type="range" min="1" max="10" name="over"/>
                    </Col>
                    <Form.Label column  sm={2} md={2} lg={1} className="text-center align-text-middle">
                        {this.state.value}
                    </Form.Label>
                    <Col sm={10} md={10} lg={3} >
                        <Form.Control type="range" min="1" max="10" name="under"/>
                    </Col>
                    <Form.Label column  sm={2} md={2} lg={1} className="text-center align-text-middle">
                        {this.state.value}
                    </Form.Label>
                </Form.Row>
            </Form.Group>
        );
    }
}
export default RangeInput;
/*
render(){
        return(
            <Form.Group controlId={this.props.controlId}>
                <Form.Row>
                    <Col sm={2} md={2} lg={1}>
                        <Form.Control type="radio" id="under" name="rating"/>
                    </Col>
                        <Form.Label column sm={4} md={4} lg={2} className="text-left align-middle align-text-middle">
                            {this.props.title}
                        </Form.Label>
                    
                    <Col sm={4} md={4} lg={6} >
                        <Form.Control type="range" min="1" max="10" name={this.props.name}/>
                    </Col>
                    <Form.Label column  sm={2} md={2} lg={3} className="text-center align-text-middle">
                        {this.state.value}
                    </Form.Label>
                </Form.Row>
            </Form.Group>
        );
    }
*/