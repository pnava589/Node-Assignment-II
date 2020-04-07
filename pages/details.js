import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Favorites from '../components/Favorites';
import MovieDetails from '../components/MovieDetails';
import { Row } from 'react-bootstrap';
import CastCrewList from '../components/CastCrewList';
import CastDetails from '../components/CastDetails';
import LoadFavorites from '../components/LoadFavorites';

class Details extends React.Component{
    constructor(props){
        super(props);
        this.state={
            movie: this.props.movie,
            castData: {},
            showMovie: true,
            showCast: false,
            show: true
        };
    }
    static async getInitialProps({query}){
        try{
            let url ='/movies/102';
            if(query.id){url=`/movies/${query.id}`};
            const res = await fetch(`/api${url}`);
            const movie = await res.json();
            return {movie}
        }catch(err){
            console.log(err);
        }
    }
    componentDidMount=async()=>{
        this.setState({show: false})
    }
    viewCastDetails= async (e)=>{
       try{
           this.setState({show: true});
            const id = e.target.id;
            const url = "https://api.themoviedb.org/3/person/"+id+"?api_key=c79963923fcbed164629915d65ccdfba";
            const resp = await fetch(url);
            const castData = await resp.json()
            this.setState({
                castData: castData,
                showMovie: false,
                showCast: true,
                show: false
            });
       }catch(err){
           console.log(err);
       }
    }
    viewMovieDetails =(eventKey)=>{
        this.setState({
            showMovie: true,
            showCast: false
        });
    }

    hide =()=>{
        this.setState({show:false});
    }
    show=()=>{
        this.setState({show: true});
    }
    //possibly make the cast details persist...
    render(){
        return(
            <Layout show={this.state.show}>
                <LoadFavorites hide={this.hide} show={this.show}/>
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