import { Button, Col, Form} from 'react-bootstrap'
class TitleInput extends React.Component{
    constructor(props){
        super(props);
        this.state ={ 
            disabled: true,
            title: '' 
        };
    }
    handleSearch=(e)=>{
        const title = this.state.title;
        const url = `/api/find/title/${title}`;
        this.props.filterFunction(url);
    }
    onChange=(e)=>{
        const title = e.target.value;
        if(title!=''){
            this.setState({disabled: false});
        }else{
            this.setState({disabled: true});
        }
        this.setState({title: title});
    }
    render(){
        return(
                <Form.Group controlId={this.props.controlId}>
                    <Form.Row>
                        <Form.Label column sm={2} md={2} lg={2} className="text-left align-middle align-text-middle">
                                Title
                        </Form.Label>
                        <Col sm={10} md={10} lg={8}>
                            <Form.Control type="text" name="title" onChange={this.onChange} placeholder="Love"/>
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
export default TitleInput;