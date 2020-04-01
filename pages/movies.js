import Layout from '../components/Layout';
import Filter from '../components/filter';
import Favorites from '../components/Favorites';
import MoviesList from '../components/MoviesList';
import fetch from 'isomorphic-unfetch';
import { resolve } from 'react-resolver';



class Movies extends React.Component{
    constructor(props){
        super(props);
        this.state = {movies: this.props.data,favorites:{},loaded:false,list:[]};
    }

    static async getInitialProps(){
        const res = await fetch('http://localhost:8080/api/movies');
        const data = await res.json();
        return {data}
    }
    getFilteredMovies = async (url) =>{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        this.setState({movies: data});
    }

    async componentDidUpdate(){
        
        
    }

    async componentDidMount(){
       this.getFavorites();
    }

    getFavorites = async() =>{
        try{
            const options ={
            method:'GET',
            headers:{'Content-type':'application/json'},
            };
            
            const resp = await fetch('http://localhost:8080/api/favorites',options);
            const data = await resp.json();
            this.setState({favorites:data});
           
            
            }
            catch(err){
                console.log('fecth error: '+err);
            }
    }
    
    
    //add cards for each movie and make the filter a dropdown, maybe accordian?
    render(){
        
        const {data} = this.props;
        const {favorites} = this.state;
        return(
            <Layout>
                <Filter filterFunction={this.getFilteredMovies}/>
                <Favorites data={favorites}/>
                <MoviesList data={data} getFavorites={this.getFavorites}/>
            </Layout>
        );
    }
}
export default Movies;