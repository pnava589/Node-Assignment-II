import { Accordion, Card, Button, FormGroup, Row, Form, Col } from "react-bootstrap";
import RangeInput from '../components/RangInput.js';
import YearInput from "./YearInput.js";
import TitleInput from "./TitleInput.js";
const TitleFilter =(props)=>{
    return(
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Title
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <TitleInput 
                        controlId="formTitle"
                        filterFunction={props.filterFunction}
                        />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
    );
};
const YearFilter=(props)=>{
    return(
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link"  eventKey="1">
                        Year
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                       <YearInput 
                       controlId="formYear"
                       filterFunction={props.filterFunction}
                       />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
    );
}
const RatingFilter =(props)=>{
    return(
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link"  eventKey="2">
                            Rating
                    </Accordion.Toggle>        
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        <RangeInput 
                        name="Rating" 
                        title="Under" 
                        controlId="formRating"
                        filterFunction={props.filterFunction}
                        />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
    )
}
class FilterAccordian extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Accordion>
                <Card>
                    <TitleFilter filterFunction={this.props.filterFunction}/>
                    <YearFilter filterFunction={this.props.filterFunction}/>
                    <RatingFilter filterFunction={this.props.filterFunction}/>
                </Card>
            </Accordion>
        );
    }
}
export default FilterAccordian;
