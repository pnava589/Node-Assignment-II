import Layout from '../components/Layout';
import Filter from '../components/filter';
import Favorites from '../components/Favorites';
import MoviesList from '../components/MoviesList';
import fetch from 'isomorphic-unfetch';




class Movies extends React.Component{
    constructor(props){
        super(props);
        this.state = {movies: this.props.data,favorites:this.props.favorites,loaded:false,list:[]};
    }

    static async getInitialProps(){
        const res = await fetch('http://localhost:8080/api/movies');
        const data = await res.json();
        const options ={
            method:'GET',
            headers:{'Content-type':'application/json'},
            };
        const resp = await fetch('http://localhost:8080/api/favorites',options);
        const favorites = await resp.json();
        return {data,favorites}
    }
    getFilteredMovies = async (url) =>{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        this.setState({movies: data});
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
        return(
            <Layout>
                <Filter filterFunction={this.getFilteredMovies}/>
                <Favorites favorites={this.state.favorites}/>
                <MoviesList data={this.state.movies} getFavorites={this.getFavorites}/>
            </Layout>
        );
    }
}
export default Movies;