import { Col, Form, Button} from 'react-bootstrap'
class RangeInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            over: '5',
            under: '5', 
            underDisabled: true, 
            overDisabled: true,
            disabled: true
        };
    }
    onClick=(e)=>{
        if(e.target.id =='under'){
            this.setState({
                underDisabled: false,
                overDisabled: true
            });
        } else if(e.target.id =='over'){
            this.setState({
                underDisabled: true,
                overDisabled: false
            });
        } else if(e.target.id =='between'){
            this.setState({
                underDisabled: false,
                overDisabled: false
            });
        }
        this.setState({disabled: false}); 
    }
    onChange=(e)=>{
        this.setState({[e.target.name]: e.target.value});
    }
    handleSearch=(e)=>{
        const type = e.target.rating.value;
        let url = ''
        if(type=="between"){
            const over =this.state.over;
            const under =this.state.under;
            url = `http://localhost:8080/api/find/rating/${over}/${under}`;
            //this.props.filterFunction(url);
        }
        else{
            const rating = this.state[e.target.rating.value];
            url = `http://localhost:8080/api/find/rating/${type}/${rating}`
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
                                Ratings
                        </Form.Label>
                        <Col sm={10} md={10} lg={2}>
                            <Form.Check type="radio" id="under" name="rating" label="Under" value="under" onClick={this.onClick}/>
                            <Form.Check type="radio" id="over" name="rating" label="Over" value="over" onClick={this.onClick}/>
                            <Form.Check type="radio" id="between" name="rating" label="Between" value="between" onClick={this.onClick}/>
                        </Col>
                        <Col sm={10} md={10} lg={3} >
                            <Form.Control type="range" min="1" max="10" name="over" disabled={this.state.overDisabled} onChange={this.onChange}/>
                        </Col>
                        <Form.Label column  sm={2} md={2} lg={1} className="text-center align-text-middle">
                            {this.state.over}
                        </Form.Label>
                        <Col sm={10} md={10} lg={3} >
                            <Form.Control type="range" min="1" max="10" name="under" disabled={this.state.underDisabled} onChange={this.onChange}/>
                        </Col>
                        <Form.Label column  sm={2} md={2} lg={1} className="text-center align-text-middle">
                            {this.state.under}
                        </Form.Label>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Button type="submit" disabled={this.state.disabled}>Search</Button>
                        </Col>
                    </Form.Row>
                </Form.Group>
            </Form>
        );
    }
}
export default RangeInput;
