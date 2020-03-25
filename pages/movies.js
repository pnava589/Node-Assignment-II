import Layout from '../components/Layout';
import { Row, Col, Button } from 'react-bootstrap';

class Movies extends React.Component{
    constructor(props){
        super(props);
    }
    //add cards for each movie and make the filter a dropdown, maybe accordian?
    render(){
        return(
            <Layout>
                <Row>
                    <Col className="justify-content-center">
                        <Button className="rounded-0" block>Drop Down Filters</Button>
                    </Col>
                </Row>
            </Layout>
        );
    }
}
export default Movies;