import { Row, Col, Button, Container, Table } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
import fetch from 'unfetch';
library.add(fas);

class SingleMovie extends React.Component{
    constructor(props){
        super(props);
        this.state={title:this.props.title,poster:this.props.poster,id:this.props.id,
                    body:{'id':this.props.id,'poster':this.props.poster,'title':this.props.title}};
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
        
        const resp = await fetch('http://localhost:8080/api/favorites',options);
        const data = await resp.json();
        await this.props.getFavorites();
        }
        catch(err){
            console.log('fecth error: '+err);
        }
    };

    render(){
<<<<<<< Updated upstream
       
=======
        
>>>>>>> Stashed changes
        const imgUrl = "https://image.tmdb.org/t/p/w92"+this.props.poster;
        return(
            <tr>
                <td><img src={imgUrl}/></td>
                <td className='text-center'>{this.props.title}</td>
                <td>{this.props.year}</td>
                <td className='text-center'>{this.props.rating}</td>
                <td ><Button className="btn btn-primary" onClick={this.addFavorite}><FontAwesomeIcon icon='thumbs-up'/></Button></td>
                <td><Button className='btn btn-primary'>View</Button></td>
            </tr>
        )
    }
}

export default SingleMovie;