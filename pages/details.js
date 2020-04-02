import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Favorites from '../components/Favorites';
import MovieDetails from '../components/MovieDetails';
import { Row } from 'react-bootstrap';
import CastCrewList from '../components/CastCrewList';

class Details extends React.Component{
    constructor(props){
        super(props);
        this.state={movie: this.props.movie}
    }
    static async getInitialProps(){
        const res = await fetch('http://localhost:8080/api/movies/102');
        const movie = await res.json();
        return {movie}
    }
    render(){
        return(
            <Layout>
                <Row noGutters>
                    <MovieDetails movie={this.state.movie} className="col-xs-12 col-md-7"/>
                    <CastCrewList movie={this.state.movie} className=""/>
                </Row>
            </Layout>
        );
    }
}
export default Details;