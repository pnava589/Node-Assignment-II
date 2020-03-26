import Layout from '../components/Layout';
import Filter from '../components/filter';
import MovieList from '../components/movieList';

class Movies extends React.Component{
    constructor(props){
        super(props);
    }
    //add cards for each movie and make the filter a dropdown, maybe accordian?
    render(){
        return(
            <Layout>
                <Filter/>
                <MovieList/>
            </Layout>
        );
    }
}
export default Movies;