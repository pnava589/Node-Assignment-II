import { Button, Col, Form} from 'react-bootstrap'
class YearInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            after: true,
            before: true,
        }
    }
    onClick=(e)=>{
        if(e.target.id=="between"){
            this.setState({
                after: false,
                before: false
            });
        } else if(e.target.id=="after"){
            this.setState({
                after: false,
                before: true
            });
        }else if(e.target.id=="before"){
            this.setState({
                after: true,
                before: false
            });
        }
    }
    render(){
        return(
            <Form.Group controlId={this.props.controlId}>
                <Form.Row>
                    <Form.Label column sm={2} md={2} lg={2} className="text-left align-middle align-text-middle">
                            Year
                    </Form.Label>
                    <Col sm={10} md={10} lg={2}>
                        <Form.Check type="radio" id="before" name="year" label="After" onClick={this.onClick}/>
                        <Form.Check type="radio" id="after" name="year" label="Before" onClick={this.onClick}/>
                        <Form.Check type="radio" id="between" name="year" label="Between" onClick={this.onClick}/>
                    </Col>
                    <Col sm={10} md={10} lg={3} >
                        <Form.Control disabled={this.state.after} type="number" name="after"/>
                    </Col>
                    <Col sm={10} md={10} lg={3} >
                        <Form.Control disabled={this.state.before} type="number" name="before"/>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Button >Search</Button>
                    </Col>
                </Form.Row>
            </Form.Group>
        );
    }
}
export default YearInput;