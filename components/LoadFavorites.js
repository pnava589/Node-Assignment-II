import fetch from 'isomorphic-unfetch';
import Favorites from './Favorites';

class LoadFavorites extends React.Component{
    constructor(props){
        super(props);
        this.state={favorites:[],refresh:this.props.refresh};
    }

   
 
    componentDidUpdate(prevProps){
        if(this.props.refresh !== prevProps.refresh){
            this.getFavorites();
        }
    }

    componentDidMount=async()=>{
    this.getFavorites();
    
    }
    
     getFavorites=async()=>{
        try{
            this.props.show();
            const options ={
            method:'GET',
            headers:{'Content-type':'application/json'},
            };

            const resp = await fetch('/api/favorites',options);
            const data = await resp.json();
            console.log(data);
            this.setState({favorites:data.favorites});
            this.props.hide();
            }
            catch(err){
                console.log('fecth error: '+err);
            }
     }
     


        

    render(){
        return(

            <>
                <Favorites favorites={this.state.favorites} getFavorites={this.getFavorites}/>
            </>
        )
    }
}

export default LoadFavorites