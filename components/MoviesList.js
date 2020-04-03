import { Row, Col, Button, Container, Table } from 'react-bootstrap';
import SingleMovie from './SingleMovie';


class MoviesList extends React.Component{
    constructor(props){
        super(props);
        this.state={movies:this.props.data};
    }
    render(){
        
        return(
            <Row className='m-5'>
            <br/>
               
                <Col>
                 
                    <Table style={{height: "40em",overflowY:'scroll'}}>   
                        <thead>
                            <tr>
                                <th></th>
                                <th className='text-center'><a href='#' name='title' onClick={this.props.sortBy}>Title </a></th>
                                <th className='text-center'><a href='#' name='year' onClick={this.props.sortBy}>Year </a></th>
                                <th className='text-center'><a href='#' name='rating' onClick={this.props.sortBy}>Rating </a></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                        {this.state.movies.map(item =>
                            <SingleMovie getFavorites={this.props.getFavorites} 
                                        id={item.id}
                                         key={item.id}
                                         poster={item.poster}
                                         title={item.title}
                                         rating={item.ratings.average}
                                         year={new Date(item.release_date).getFullYear()}/>

                            )}
                        </tbody>

                    </Table>
                   
                </Col>
            
            </Row>
        );
        } 
    }
export default MoviesList;