import Layout from '../components/Layout';
import HomeJumbotron from '../components/HomeJumbotron';
import LoginCard from '../components/LoginCard';
import { Alert } from 'react-bootstrap';
class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {show: true, message: props.m};
  }
  render(){
    return(
      <Layout>
        {this.state.message ===  '1' && this.state.show && 
              <Alert className="mb-0"variant="danger" onClose={()=>this.setState({show: false})} dismissible>
                  <Alert.Heading>Please Login to view that!</Alert.Heading>
              </Alert>}
        {this.state.message ===  '2' && this.state.show && 
              <Alert className="mb-0"variant="danger" onClose={()=>this.setState({show: false})} dismissible>
                  <Alert.Heading>Invalid Login!</Alert.Heading>
              </Alert>}
        <HomeJumbotron>
              <LoginCard/>
        </HomeJumbotron>
      </Layout>
    );
  }
}
Login.getInitialProps=({query: m})=>{
  if(m.message.length==0){
    m.message='Please login to view that resource';
    return m;
  } 
  else return m;
}
export default Login;
