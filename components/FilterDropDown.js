import { Dropdown, Card, Button } from "react-bootstrap";
import FilterAccordian from "./filterAccordian";

class FilterDropDown extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Dropdown>
                <Dropdown.Toggle as={Button} id="filter-drop-down" className="btn-lg">
                    Filters
                </Dropdown.Toggle>
                <Dropdown.Menu className="p-0 col-lg-8 col-sm-8">
                    <FilterAccordian/>
                    <Dropdown.Item eventKey='1' as={Card.Footer}>
                        <Button >Search</Button>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}
export default FilterDropDown;
