import Layout from '../components/Layout';
import Favorites from '../components/Favorites';
import Filter from '../components/filter';
import MoviesList from '../components/MoviesList';
import fetch from 'isomorphic-unfetch';




class Movies extends React.Component{
    constructor(props){
        super(props);
        this.state = {movies: this.props.data,favorites:[],loaded:false,list:[]};
    }

    static async getInitialProps(context){
        const {query} = context;
        console.log(query);
        let url ='/brief';
        
        if(query.substring){url=`/find/title/${query.substring}`};
        console.log(`http://localhost:8080/api${url}`);
        const res = await fetch(`http://localhost:8080/api${url}`);
        const data = await res.json();
        return {data};
    }

    sortBy = (e) =>{
        console.log(e.target.name);
        if(e.target.name === 'title'){
        this.state.movies.sort((a,b)=>{ if(a.title > b.title){return 1}
                                            if(a.title < b.title){return -1}
                                            return 0;})
        }
        if(e.target.name === 'year'){
        this.state.movies.sort((a,b)=>{ if(a.release_date > b.release_date){return 1}
                                                if(a.release_date < b.release_date){return -1}
                                                return 0;})
        }
        if(e.target.name === 'rating'){
        this.state.movies.sort((a,b)=>{ if(a.ratings.average > b.ratings.average){return 1}
                                                if(a.ratings.average < b.ratings.average){return -1}
                                                return 0;})
        }
        this.setState({movies:this.state.movies});
        
    }


    getFilteredMovies = async (url) =>{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        this.setState({movies: data});
    }

     componentDidMount(){
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
            this.setState({favorites:data.favorites});
            }
            catch(err){
                console.log('fecth error: '+err);
            }
    }
     
    render(){

            return(
                <Layout>
                    <Filter filterFunction={this.getFilteredMovies}/>
                    <Favorites favorites={this.state.favorites} getFavorites={this.getFavorites}/>
                    <MoviesList movies={this.state.movies} getFavorites={this.getFavorites} sortBy={this.sortBy}/>
                </Layout>
            );
        
    }
}
export default Movies;