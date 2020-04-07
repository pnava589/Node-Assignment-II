import Layout from '../components/Layout';
import HomeJumbotron from '../components/HomeJumbotron';
import HomeCard from '../components/HomeCard';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state ={show: false}
  }
  show=()=>{
    this.setState({show: true});
  }
  render(){
    return(
      <Layout show={this.state.show}>
      <HomeJumbotron>
          <HomeCard show={this.show}/>
      </HomeJumbotron>
      </Layout>
    );
  }
}

export default Home;