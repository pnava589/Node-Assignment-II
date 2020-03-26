import Layout from '../components/Layout';
import Filter from '../components/filter';
import MoviesList from '../components/MoviesList';
import fetch from 'isomorphic-unfetch';

class Movies extends React.Component{
    constructor(props){
        super(props);
    }

    static async getInitialProps(){
        const res = await fetch('http://localhost:8080/api/movies');
        const data = await res.json();
        return {data};
    }
    //add cards for each movie and make the filter a dropdown, maybe accordian?
    render(){
        const {data} = this.props;
        return(
            <Layout>
                <Filter/>
                <MoviesList data={data}/>
            </Layout>
        );
    }
}
export default Movies;