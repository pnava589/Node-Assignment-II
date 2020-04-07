import { Card, Row, Col, Tooltip, OverlayTrigger, Modal, Nav, CardColumns, Button } from "react-bootstrap";
import MovieDetailsCard from "./MovieDetailsCard";
import DetailsCard from "./DetailsCard";
import CustomModal from "./CustomImageModal";
import Stars from "./stars";
import fetch from "isomorphic-unfetch";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
const addToFavorites = async(favorite, show, hide, refresh)=>{
    try{
        show();
        const options ={
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(favorite)
        };
        
        const resp = await fetch('/api/favorites',options);
        const data = await resp.json();
        hide();
        refresh();
        }
        catch(err){
            console.log('fecth error: '+err);
        }
}

const MovieDetails =(props)=>{
    const movie = props.movie[0];
    const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster}`;
    const largeUrl = `https://image.tmdb.org/t/p/w780${movie.poster}`;
    const style = {height: 'inherit',overflowY: "scroll"};
    const favoriteItem = {'id':movie.id,'poster':movie.poster,'title':movie.title};
    return(
        
        
        <Card className={props.className}>
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="movie" className="justify-content-between">
                    <Nav.Item>
                        <Nav.Link href="#details" eventKey="movie">Movie Details</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body style={{overflowY: 'scroll', height: '90vh'}}>
                <Card.Title as={Row}>
                    <Col xs={12} md={8} lg={6}>
                        <h5>
                        {movie.title}
                        <Stars num_stars={movie.ratings.average}/>
                        </h5>
                    </Col>
                    <Col>
                        <Button className="mr-2" onClick={
                            ()=>addToFavorites(favoriteItem, props.show, props.hide, props.refresh)
                            }>
                            <FontAwesomeIcon icon={faThumbsUp}/> Add to Favorites
                        </Button>
                        <Link href="/movies">
                            <Button>All Movies</Button>
                        </Link>
                    </Col>
                </Card.Title>
                <Row >
                    <CustomModal label={movie.title} smUrl={imgUrl} lgUrl={largeUrl}/>
                    <Col xs={12} lg={6} style={style}>
                        <MovieDetailsCard movie={movie}/>
                    </Col>
                </Row>
                <Row>
                    <CardColumns className="col-12">
                        <DetailsCard label="Related Genres" data={movie.details.genres}/>
                        <DetailsCard label="Production Companies" data={movie.production.companies}/>
                        <DetailsCard label="Production Countries" data={movie.production.countries}/>
                        <DetailsCard label="Keywords" data={movie.details.keywords}/>
                    </CardColumns>
                </Row>
            </Card.Body>
        </Card>
        
    )
}
export default MovieDetails;
