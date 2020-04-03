import { Card, Alert } from "react-bootstrap";

const DetailsCard =(props)=>{
    return(
        <Card className={props.className}>
            <Card.Header>{props.label}</Card.Header>
            <Card.Body>
                <ul>
                {
                    props.data == null && props.children == null &&
                    <Alert variant="danger">No data available</Alert>
                }
                {
                    props.data != null && props.data.length >= 1 &&
                    props.data.map((item, idx)=><li key={idx}>{item.name}</li>)
                }
                {props.children}
                </ul>
            </Card.Body>
        </Card>
    );
}
export default DetailsCard;