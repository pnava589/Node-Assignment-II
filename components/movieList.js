import { Container, Row, Col, Table } from 'react-bootstrap';
class MovieList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Container fluid className="bg-secondary">
                <Row>
                    <Col>
                    <h3>Movies</h3>
                    </Col>
                </Row>
                </Container>

    
        );
    }
}
export default MovieList;