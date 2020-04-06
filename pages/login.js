import Layout from '../components/Layout';
import HomeJumbotron from '../components/HomeJumbotron';
import LoginCard from '../components/LoginCard';
import { Alert } from 'react-bootstrap';
class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {show: true, message: this.props.message};
  }
  render(){
    return(
      <Layout is_authenticated={false}>
        {this.state.message && this.state.show && 
              <Alert className="mb-0"variant="danger" onClose={()=>this.setState({show: false})} dismissible>
                  <Alert.Heading>Login error</Alert.Heading>
                  <p>{this.state.message}</p>
              </Alert>}
        <HomeJumbotron>
              <LoginCard/>
        </HomeJumbotron>
      </Layout>
    );
  }
}
Login.getInitialProps=({query: m})=>{
  return {message: m.message};
}
export default Login;
