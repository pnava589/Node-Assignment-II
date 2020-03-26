import { Row, Col, Button, Container, Table } from 'react-bootstrap';

class SingleMovie extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log('does it get here?');
        console.log(this.props);
        console.log('title: '+this.props.title + " year: "+this.props.release_date);
        return(
            <tr>
                <td>{this.props.title}</td>
                <td>{this.props.release_date}</td>
                <td>{this.props.rating}</td>
                <td>heart</td>
                <td>View</td>
            </tr>
        )
    }
}

export default SingleMovie;