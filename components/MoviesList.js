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
        //console.log(this.props.data);
        console.log(typeof(this.props.data[0].release_date));
        
        return(
            <Container>

            <br/>
            
            <Row>
                <Col>
                
                </Col>
                <Col>
                  <Container style={{height: "40em",overflowY:'scroll'}}>
                    <Table className='col ml-5' >   
                        <thead>
                            <tr>
                                <th></th>
                                <th className='text-center'>Title</th>
                                <th className='text-center'> Year</th>
                                <th className='text-center'>Rating</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                        {this.props.data.map(item =>
                            <SingleMovie key={item.id}
                                         poster={item.poster}
                                          title={item.title}
                                          rating={item.ratings.average}
                                          year={new Date(item.release_date).getFullYear()}/>

                            )}
                        </tbody>

                    </Table>
                    </Container> 
                </Col>
            </Row>
            </Container>
        );
        } 
    }
export default MoviesList;