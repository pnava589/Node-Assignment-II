import { Card, Row, Col, Tooltip, OverlayTrigger, Modal, Nav, CardColumns } from "react-bootstrap";
import MovieDetailsCard from "./MovieDetailsCard";
import DetailsCard from "./DetailsCard";
import CustomModal from "./CustomImageModal";
import Stars from "./stars";


const MovieDetails =(props)=>{
    const movie = props.movie[0];
    const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster}`;
    const largeUrl = `https://image.tmdb.org/t/p/w780${movie.poster}`;
    const style = {height: 'inherit',overflowY: "scroll"};
    //make this accordian if have time

    /*const addFavorite = async() =>{
        try{
            const options ={
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(this.state.body)
            };
            
            const resp = await fetch('/api/favorites',options);
            const data = await resp.json();
            await this.props.getFavorites();
            }
            catch(err){
                console.log('fecth error: '+err);
            }
    }*/
    return(
        
        
        <Card className={props.className}>
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="movie">
                    <Nav.Item>
                        <Nav.Link href="#details" eventKey="movie">Movie Details</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body style={{overflowY: 'scroll', height: '90vh'}}>
                <Card.Title>
                    {movie.title}
                    <Stars num_stars={movie.ratings.average}/>
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
/*
 <Card.Body style={{overflowY: 'scroll'}}>
                <Card.Title>{movie.title}</Card.Title>
                <Row noGutters style={{height: '72vh'}}>
                    <Col xs={12} md={12} lg={6} style={style}>
                        <CustomModal label={movie.title} smUrl={imgUrl} lgUrl={largeUrl}/>
                    </Col>
                    <Col xs={12} md={12} lg={6} style={style}>
                        <MovieDetailsCard movie={movie}/>
                    </Col>
                    <Col xs={12} md={12} lg={6} style={style}>
                        <DetailsCard label="Related Genres" data={movie.details.genres}/>
                    </Col>
                    <Col xs={12} md={12} lg={6} style={style}>
                        <DetailsCard label="Production Companies" data={movie.production.companies}/>
                    </Col>
                    <Col xs={12} md={12} lg={6} style={style}>
                        <DetailsCard label="Production Countries" data={movie.production.countries}/>
                    </Col>
                    <Col xs={12} md={12} lg={6} style={style}>
                        <DetailsCard label="Keywords" data={movie.details.keywords}/>
                    </Col>
                </Row>
            </Card.Body>
*/