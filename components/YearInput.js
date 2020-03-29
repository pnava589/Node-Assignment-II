import { Button, Col, Form} from 'react-bootstrap'
class YearInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            after: '',
            before: '',
            disabled: true,
            afterDisabled: true,
            beforeDisabled: true
        }
    }
    onClick=(e)=>{
        if(e.target.id=="between"){
            this.setState({
                afterDisabled: false,
                beforeDisabled: false,
                disabled: false,
                before: 2010,
                after: 2002
            });
        } else if(e.target.id=="after"){
            this.setState({
                afterDisabled: false,
                beforeDisabled: true,
                disabled: false,
                before: '',
                after: 2002
            });
        }else if(e.target.id=="before"){
            this.setState({
                afterDisabled: true,
                beforeDisabled: false,
                disabled: false,
                before: 2010,
                after: ''
            });
        }
    }
    onChange=(e)=>{
        if(e.target.value!=''){
            this.setState({disabled: false});
        }else{
            this.setState({disabled: true});
        }
        this.setState({[e.target.name]: e.target.value});
    }
    handleSearch=(e)=>{

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
                        <Form.Control disabled={this.state.afterDisabled} onChange={this.onChange} type="number" name="after" value={this.state.after}/>
                    </Col>
                    <Col sm={10} md={10} lg={3} >
                        <Form.Control disabled={this.state.beforeDisabled} onChange={this.onChange} type="number" name="before" value={this.state.before}/>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Button disabled={this.state.disabled} onClick={this.handleSearch}>Search</Button>
                    </Col>
                </Form.Row>
            </Form.Group>
        );
    }
}
export default YearInput;