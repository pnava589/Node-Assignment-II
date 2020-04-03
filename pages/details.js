import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Favorites from '../components/Favorites';
import MovieDetails from '../components/MovieDetails';
import { Row } from 'react-bootstrap';
import CastCrewList from '../components/CastCrewList';
import CastDetails from '../components/CastDetails';

class Details extends React.Component{
    constructor(props){
        super(props);
        this.state={
            movie: this.props.movie,
            castData: {},
            showMovie: true,
            showCast: false
        };
    }
    static async getInitialProps({query: id}){
        console.log(id);
        const res = await fetch('http://localhost:8080/api/movies/102');
        const movie = await res.json();
        return {movie}
    }
    viewCastDetails= async (e)=>{
        const id = e.target.id;
        const url = "https://api.themoviedb.org/3/person/"+id+"?api_key=c79963923fcbed164629915d65ccdfba";
        const resp = await fetch(url);
        const castData = await resp.json()
        this.setState({
            castData: castData,
            showMovie: false,
            showCast: true
        });
    }
    viewMovieDetails =(eventKey)=>{
        this.setState({
            showMovie: true,
            showCast: false
        });
    }
    //possibly make the cast details persist...
    render(){
        return(
            <Layout>
                <Row noGutters>
                    {
                        this.state.showMovie && <MovieDetails movie={this.state.movie} className="col-xs-12 col-md-7"/>
                    }
                    {
                        this.state.showCast && <CastDetails view={this.viewMovieDetails} className="col-xs-12 col-md-7" cast={this.state.castData} />
                    }
                    <CastCrewList view={this.viewCastDetails} movie={this.state.movie} className=""/>
                </Row>
            </Layout>
        );
    }
}
export default Details;