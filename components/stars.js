import { Col } from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar, faStarHalfAlt} from '@fortawesome/free-solid-svg-icons';
import {faStar as far} from '@fortawesome/free-regular-svg-icons';
class Stars extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
    var num = Math.round(this.props.num_stars*2)/2;
    var half = Math.round(num)-num;
    num = num-half
    let stars =[];
    var k;
    for(k = 0 ; k < num; k++){
        stars.push(<FontAwesomeIcon icon={faStar} key={k} />);
    }
    if(half>0){
        stars.push(<FontAwesomeIcon icon={faStarHalfAlt} key= {half} />);
        num++;
    }
    for(k=num; k<10; k++){
        stars.push(<FontAwesomeIcon icon={far} key={k}/>)
    }
    return(
        <Col>
            Rating: {stars}
        </Col>
    );
    }
    
};
export default Stars;