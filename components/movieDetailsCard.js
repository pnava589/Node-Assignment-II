import { Col } from "react-bootstrap";

const MovieDetailsCard =(props)=>{
    const tmdbUrl = "https://www.themoviedb.org/movie/"+props.movie.tmdb_id;
    const imdbUrl ="https://www.imdb.com/title/"+props.movie.imdb_id;
    return(
        <div style={{height: "10em", overflowY: "scroll"}}>
            <Col>
                <u>Release Date:</u> {props.movie.release_date}
            </Col>
            <Col>
                <u>Run Time:</u> {props.movie.runtime} Minutes
            </Col>
            <Col>
                <u>Revenue:</u> {props.movie.revenue}
            </Col>
            <Col>
                <u>Tagline:</u> {props.movie.tagline}
            </Col>
            <Col>
                <u>Overview:</u> {props.movie.details.overview}
            </Col>
            <Col>
                <u>
                    <a href={imdbUrl}>IMDB link</a>
                </u>
            </Col>
            <Col>
                <u>
                    <a href={tmdbUrl}>TMDB link</a>
                </u>
            </Col>
            <Col>
                <u>Number of Reviews:</u> {props.movie.ratings.count}
            </Col>
            <Col>
                <u>Popularity:</u> {props.movie.ratings.popularity}
            </Col>
        </div>
    );
}
export default MovieDetailsCard;