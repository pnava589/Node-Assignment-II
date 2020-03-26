import { Row, Col, Button, Container } from 'react-bootstrap';
import FilterAccordian from './filterAccordian';
import FilterDropDown from './FilterDropDown';
class Filter extends React.Component{
    constructor(props){
        super(props);
        this.state = {show: this.props.show};
    }
    render(){
        return(
            <Container fluid className="bg-secondary">
                <Row>
                    <Col lg={12} className="m-0 p-0">
                        <FilterDropDown/>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col sm={12}>
                        
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Filter;