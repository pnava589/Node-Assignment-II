import { Card, Row, Col, Tooltip, OverlayTrigger, Modal, Nav } from "react-bootstrap";
import MovieDetailsCard from "./MovieDetailsCard";
import DetailsCard from "./DetailsCard";
import CustomModal from "./CustomImageModal";


const MovieDetails =(props)=>{
    const movie = props.movie[0];
    const imgUrl = `https://image.tmdb.org/t/p/w342${movie.poster}`;
    const largeUrl = `https://image.tmdb.org/t/p/w780${movie.poster}`;
    const style = {height: 'inherit',overflowY: "scroll", overflowX: "hidden"};
    //make this accordian if have time
    return(
        <Card className={props.className}>
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="movie">
                    <Nav.Item>
                        <Nav.Link href="#details" eventKey="movie">Movie Details</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body style={{overflowY: 'scroll'}}>
                <Card.Title>{movie.title}</Card.Title>
                <Row noGutters style={{height: '72vh'}}>
                    <Col xs={12} md={6} style={style}>
                        <CustomModal label={movie.title} smUrl={imgUrl} lgUrl={largeUrl}/>
                    </Col>
                    <Col xs={12} md={6} style={style}>
                        <MovieDetailsCard movie={movie}/>
                        <DetailsCard label="Related Genres" data={movie.details.genres}/>
                        <DetailsCard label="Production Companies" data={movie.production.companies}/>
                        <DetailsCard label="Production Countries" data={movie.production.countries}/>
                        <DetailsCard label="Keywords" data={movie.details.keywords}/>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}
export default MovieDetails;