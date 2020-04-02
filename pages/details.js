import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Favorites from '../components/Favorites';
import MovieDetails from '../components/movieDetails';
import { Row } from 'react-bootstrap';

class Details extends React.Component{
    constructor(props){
        super(props);
        this.state={movie: this.props.movie}
    }
    static async getInitialProps(){
        const res = await fetch('http://localhost:8080/api/movies/2');
        const movie = await res.json();
        return {movie}
    }
    render(){
        return(
            <Layout>
                <Row>
                    <MovieDetails movie={this.state.movie}/>
                </Row>
            </Layout>
        );
    }
}
export default Details;