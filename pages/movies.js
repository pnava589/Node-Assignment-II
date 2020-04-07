import Layout from '../components/Layout';
import Favorites from '../components/Favorites';
import Filter from '../components/filter';
import MoviesList from '../components/MoviesList';
import LoadFavorites from '../components/LoadFavorites';
import Sort from '../components/Sort';
import fetch from 'isomorphic-unfetch';




class Movies extends React.Component{
    constructor(props){
        super(props);
        this.state = {movies: this.props.data,favorites:[],show:true,list:[],refreshFavs:false};
    }

    static async getInitialProps(context){
        try{
            const {query} = context;
            //console.log(query);
            let url ='/brief';
            if(query.substring){url=`/find/title/${query.substring}`};
            const res = await fetch(`/api${url}`);
            const data = await res.json();
            return {data};
        }catch(err){
            console.log(err)
        }
        
    }

    sortBy = (e) =>{
        console.log(e.target.name);
        console.log(e.target.value);
        this.show();
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
        this.setState({movies:this.state.movies, show: false});
        
    }


    getFilteredMovies = async (url) =>{
        try{
            this.show();
            const res = await fetch(url);
            const data = await res.json();
            this.setState({movies: data, show: false});
            
        }catch(err){
            console.log(err);
        }
    }

     
    show=()=>{
        this.setState({show: true});
    }
    hide=()=>{
        this.setState({show: false});
    }
    /*getFavorites = () =>{
        this.setState({refreshFavs:!this.state.refreshFavs});
    }*/
     
    render(){

            return(
                <Layout show={this.state.show}>
                    <Filter filterFunction={this.getFilteredMovies}/>
                    <LoadFavorites hide={this.hide} show={this.show} refresh={this.getFavorites}/>
                    <Sort sortBy={this.sortBy}></Sort>
                    <MoviesList show={this.show} movies={this.state.movies} getFavorites={this.getFavorites} sortBy={this.sortBy}/>
                </Layout>
            );
        
    }
}
export default Movies;