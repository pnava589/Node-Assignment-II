import { Row, Col, Button, Container, Table } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
library.add(fas);

class SingleMovie extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log('does it get here?');
        const imgUrl = "https://image.tmdb.org/t/p/w92"+this.props.poster;
        return(
            <tr>
                <td><img src={imgUrl}/></td>
                <td className='text-center'>{this.props.title}</td>
                <td>{this.props.year}</td>
                <td className='text-center'>{this.props.rating}</td>
                <td ><Button className="btn btn-primary"><FontAwesomeIcon icon='thumbs-up'/></Button></td>
                <td><Button className='btn btn-primary'>View</Button></td>
            </tr>
        )
    }
}

export default SingleMovie;