import { Accordion, Card, Button } from "react-bootstrap";

class FilterAccordian extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Card>
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Title
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            Title Input
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
             <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link"  eventKey="1">
                                Year
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            Year Input
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
                 <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link"  eventKey="2">
                                Rating
                        </Accordion.Toggle>        
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            Rating Input
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </Card>
        );
    }
}
export default FilterAccordian;