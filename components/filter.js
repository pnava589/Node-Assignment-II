import { Row, Col, Button, Container } from 'react-bootstrap';
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
                        <FilterDropDown filterFunction={this.props.filterFunction}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Filter;