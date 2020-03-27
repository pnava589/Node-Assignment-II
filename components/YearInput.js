import { FormGroup, Row, Col, Form} from 'react-bootstrap'
class YearInput extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Form.Group controlId={this.props.controlId}>
                <Form.Row>
                    <Form.Label column sm={2} md={2} lg={2} className="text-left align-middle align-text-middle">
                            Year
                    </Form.Label>
                    <Col sm={10} md={10} lg={2}>
                        <Form.Check type="radio" id="before" name="year" label="After"/>
                        <Form.Check type="radio" id="after" name="year" label="Before"/>
                        <Form.Check type="radio" id="between" name="year" label="Between"/>
                    </Col>
                    <Col sm={10} md={10} lg={3} >
                        <Form.Control type="number" name="after"/>
                    </Col>
                    <Col sm={10} md={10} lg={3} >
                        <Form.Control type="number" name="before"/>
                    </Col>
                </Form.Row>
            </Form.Group>
        );
    }
}
export default YearInput;