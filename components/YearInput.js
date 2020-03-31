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
        const type = e.target.year.value;
        let url = ''
        if(type=="between"){
            const before =this.state.before;
            const after =this.state.after;
            url = `http://localhost:8080/api/find/year/${after}/${before}`;
            //this.props.filterFunction(url);
        }
        else{
            const year = this.state[e.target.year.value];
            url = `http://localhost:8080/api/find/year/${type}/${year}`
        }
        this.props.filterFunction(url);
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    }
    render(){
        return(
            <Form onSubmit={this.handleSearch}>
            <Form.Group controlId={this.props.controlId}>
                <Form.Row>
                    <Form.Label column sm={2} md={2} lg={2} className="text-left align-middle align-text-middle">
                            Year
                    </Form.Label>
                    <Col sm={10} md={10} lg={2}>
                        <Form.Check type="radio" id="after" name="year" label="After" value="after" onClick={this.onClick}/>
                        <Form.Check type="radio" id="before" name="year" label="Before" value="before" onClick={this.onClick}/>
                        <Form.Check type="radio" id="between" name="year" label="Between" value="between" onClick={this.onClick}/>
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
                        <Button disabled={this.state.disabled} type="submit">Search</Button>
                    </Col>
                </Form.Row>
            </Form.Group>
            </Form>
        );
    }
}
export default YearInput;