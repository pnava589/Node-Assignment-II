import Layout from '../components/Layout';
import Filter from '../components/filter';

class Movies extends React.Component{
    constructor(props){
        super(props);
    }
    //add cards for each movie and make the filter a dropdown, maybe accordian?
    render(){
        return(
            <Layout>
                <Filter/>
            </Layout>
        );
    }
}
export default Movies;