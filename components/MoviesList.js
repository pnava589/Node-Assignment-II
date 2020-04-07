import { Row, Col, Button, Container, Table,CardDeck } from 'react-bootstrap';
import SingleMovie from './SingleMovie';


const MoviesList=(props)=>{
    return(
        <Row lg={4}>
        
            <CardDeck className='justify-content-center'>
            {props.movies.map(item =>
                        <SingleMovie getFavorites={props.getFavorites}
                                     show={props.show} 
                                     id={item.id}
                                     key={item.id}
                                     poster={item.poster}
                                     title={item.title}
                                     rating={item.ratings.average}
                                     overview={item.overview}
                                     year={new Date(item.release_date).getFullYear()}/>

                        )}
            </CardDeck>

        
        </Row>
    );
}

export default MoviesList;