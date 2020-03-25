import { Row, Col, Button } from 'react-bootstrap';
class Filter extends React.Component{
    constructor(props){
        super(props);
        this.state = {show: this.props.show};
    }
    render(){
        return(
            <div>
                <Row>
                    <Col className="justify-content-center">
                        <Button className="rounded-0" block>Drop Down Filters</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Filter;