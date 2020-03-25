import Layout from '../components/Layout';
import HomeJumbotron from '../components/HomeJumbotron';
import HomeCard from '../components/HomeCard';
import Fetch from 'isomorphic-unfetch';

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

Home.getInitialProps = async function(){
  const resp = await fetch('http://localhost:8080/api/brief');
  const data = await resp.json();
  return data;
}

export default Home;