import { Container, Row, Col, Table } from 'react-bootstrap';
import { useEffect, useState } from "react";

const Favorites=(props)=>{
const [favorites,setFavorites] = useState([]);
return(
    <Row className="text-white">
        <Col className="col-md-1 align-self-center text-center text-dark">
        <h5>Favorites</h5>
        </Col>
    </Row>
);

}
export default Favorites;