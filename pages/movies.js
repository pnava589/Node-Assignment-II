import Layout from '../components/Layout';
import Filter from '../components/filter';
import Favorites from '../components/Favorites';
import MoviesList from '../components/MoviesList';
import fetch from 'isomorphic-unfetch';




class Movies extends React.Component{
    constructor(props){
        super(props);
        this.state = {movies: this.props.data,favorites:[],loaded:false,list:[]};
    }

    static async getInitialProps(){
        const res = await fetch('http://localhost:8080/api/movies');
        const data = await res.json();
        return {data};
    }


    getFilteredMovies = async (url) =>{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        this.setState({movies: data});
    }

    async componentDidMount(){
        await this.getFavorites();
    }
    
    getFavorites = async() =>{
        try{
            const options ={
            method:'GET',
            headers:{'Content-type':'application/json'},
            };

            const resp = await fetch('http://localhost:8080/api/favorites',options);
            const data = await resp.json();
            console.log(data);
            console.log(data.length);
            console.log(data.favorites);
            this.setState({favorites:data.favorites});


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