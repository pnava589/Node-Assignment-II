import { Button, Col, Form} from 'react-bootstrap'
class TitleInput extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Form.Group controlId={this.props.controlId}>
                <Form.Row>
                    <Form.Label column sm={2} md={2} lg={2} className="text-left align-middle align-text-middle">
                            Title
                    </Form.Label>
                    <Col sm={10} md={10} lg={8}>
                        <Form.Control type="text" name="title" placeholder="John Whick"/>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Button type="submit">Search</Button>
                    </Col>
                </Form.Row>
            </Form.Group>
        );
    }
}
export default TitleInput;