import { Accordion, Card, Button, FormGroup, Row, Form, Col } from "react-bootstrap";
import RangeInput from '../components/RangInput.js';
import YearInput from "./YearInput.js";
import TitleInput from "./TitleInput.js";
const TitleFilter =()=>{
    return(
        <Accordion>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Title
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <TitleInput controlId="formTitle"/>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
};
const YearFilter=()=>{
    return(
        <Accordion>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link"  eventKey="1">
                        Year
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                       <YearInput controlId="formYear"/>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}
const RatingFilter =()=>{
    return(
        <Accordion>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link"  eventKey="2">
                            Rating
                    </Accordion.Toggle>        
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        <RangeInput name="Rating" title="Under" controlId="formRating"/>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}
class FilterAccordian extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Card>
               <TitleFilter/>
               <YearFilter/>
               <RatingFilter/>
            </Card>
        );
    }
}
export default FilterAccordian;