import Layout from '../components/Layout';
import AboutJumbotron from '../components/About';
import {Modal} from 'react-bootstrap';

class About extends React.Component{
    constructor(props){
        super(props);
        this.state ={show: this.props.show};
    }

render(){
    return(
        <Layout>
            <AboutJumbotron/>
        </Layout>
        );
    }
}

export default About;