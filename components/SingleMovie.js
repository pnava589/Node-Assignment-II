import { Row, Col, Button, Container, Table,Card } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
import fetch from 'unfetch';
import  Link  from 'next/link';

library.add(fas);

class SingleMovie extends React.Component{
    constructor(props){
        super(props);
        this.state={title:this.props.title,poster:this.props.poster,id:this.props.id,year:this.props.year,overview:this.props.overview,
            rating:this.props.rating, body:{'id':this.props.id,'poster':this.props.poster,'title':this.props.title}, max_length:175};
    }

    componentDidMount(){
        
    }
    
    addFavorite = async(e) =>{
        try{
        const options ={
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(this.state.body)
        };
        
        const resp = await fetch('/api/favorites',options);
        const data = await resp.json();
        await this.props.getFavorites();
        }
        catch(err){
            console.log('fecth error: '+err);
        }
    };

    render(){
        const imgUrl = "https://image.tmdb.org/t/p/w185"+this.state.poster;
        const titleStyle ={text:'center'};
        console.log(imgUrl);
        return(
            <div className='col-auto mb-5'>
            <Card style={{width:'15rem',height:'35rem'}}>
            <Button className ='btn btn-secondary' onClick={this.addFavorite} style={{'zIndex':4,position:'absolute',left:'4%',top:'1%',margin:'auto'}}><FontAwesomeIcon icon='thumbs-up'/></Button>
                <Link href={{pathname:'/details',query:{id:this.state.id}}}>
                <Card.Img src = {imgUrl} alt={this.state.title}/>
                </Link>
                <Card.Body>
                    <Card.Title>{this.state.title}</Card.Title>
                    <Row>
                        <Col>
                            <div><b>Year:</b> {this.state.year}</div>
                        </Col>
                        <Col>
                        <div><b>Rating:</b> {this.state.rating}</div>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer>
                   <Row  className='justify-content-center'>     
                            <Link href={{pathname:'/details',query:{id:this.state.id}}}>
                                <Button onClick={this.props.show} className='btn btn-primary'>See Details</Button>
                            </Link>
                    </Row>
                </Card.Footer>
            </Card>
            </div>
          
        )
    }
}

export default SingleMovie;