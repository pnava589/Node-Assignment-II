import Layout from '../components/Layout';
import Filter from '../components/filter';
import MovieList from '../components/movieList';

class Movies extends React.Component{
    constructor(props){
        super(props);
    }

    static async getInitialPropr(){
        const res = await fetch('http://localhost:8080:api/movies');
        const data = await res.json();
        return {data};
    }
    //add cards for each movie and make the filter a dropdown, maybe accordian?
    render(){
        return(
            <Layout>
                <Filter/>
                <MovieList data={data}/>
            </Layout>
        );
    }
}
export default Movies;