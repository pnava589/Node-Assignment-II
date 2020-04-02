import { Card, Row, Col } from "react-bootstrap";
import MovieDetailsCard from "./movieDetailsCard";

const MovieDetails =(props)=>{
    const movie = props.movie[0];
    const imgUrl = `https://image.tmdb.org/t/p/w342${movie.poster}`
    return(
        <Card>
            <Card.Header as="h5">Movie Details</Card.Header>
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Row>
                    <Col>
                        <img src={imgUrl}/>
                    </Col>
                    <Col>
                        <MovieDetailsCard movie={movie}/>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}
export default MovieDetails;