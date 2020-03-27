import { Row, Col, Button, Container, Table } from 'react-bootstrap';
import SingleMovie from './SingleMovie';

class MoviesList extends React.Component{
    constructor(props){
        super(props);
        this.state={movies:this.props.data};

    }

    render(){
        /*console.log('this props: '+this.props.data[0].title);
        this.props.data.forEach((item)=>{
            console.log('title: '+item.title+ ' | ratings: '+item.ratings.average+ ' | year: '+item.release_date);
        })*/
        console.log(this.props.data);
        
        return(
            <div>

            
            <Table className='col ml-5'>   
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Rating</th>
                    </tr>
                </thead>

                <tbody>
                {this.props.data.map(item =>
                       <tr>
                       <td>{item.title}</td>
                        <td>{item.release_date}</td>
                        <td>{item.rating}</td>
                        <td>Heart</td>
                        <td>View</td>
                        </tr>
                    )}
                </tbody>

            </Table>
            </div>
        );
        } 
    }
export default MoviesList;