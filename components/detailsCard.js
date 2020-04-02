import { Card, Alert } from "react-bootstrap";

const DetailsCard =(props)=>{
    return(
        <Card style={props.style} className={props.className}>
            <Card.Header>{props.label}</Card.Header>
            <Card.Body>
                <ul>
                {
                    props.data.length >=1 &&
                    props.data.map((item, idx)=><li key={idx}>{item.name}</li>)
                }
                {
                    props.data.length <=1 || props.data.length == null &&
                    <Alert variant="danger">No data available</Alert>
                }
                </ul>
            </Card.Body>
        </Card>
    );
}
export default DetailsCard;