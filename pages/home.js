import Layout from '../components/Layout';
import HomeJumbotron from '../components/HomeJumbotron';
import HomeCard from '../components/HomeCard';

class Home extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Layout>
      <HomeJumbotron>
          <HomeCard/>
      </HomeJumbotron>
      </Layout>
    );
  }
}

export default Home;