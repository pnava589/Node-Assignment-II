import { Col, Row, Button, Alert } from "react-bootstrap";
const CastMembers = (props) =>{
    if(props.cast == null){
        return(
            <div>
                <Row>
                    <Col xs={4}>Character</Col>
                    <Col xs={4}>Name</Col>
                </Row>
                <hr/>
                <Alert variant="danger">No data available</Alert>
            </div>
        );
    }else{
       props.cast.sort((a,b)=>{ if(a.order>b.order) return 1;
                                        if(a.order < b.order) return -1;
                                        return 0;})
        return(
            <div>
                <Row>
                    <Col xs={4}>Character</Col>
                    <Col xs={4}>Name</Col>
                </Row>
                <hr/>
                {
                    props.cast.map(member=>
                                <Row style={{marginBottom: "1em"}}key={member.id}>
                                    <Col xs={4}>{member.character}</Col>
                                    <Col xs={4}>{member.name}</Col>
                                    <Col xs={4}><Button>View</Button></Col>
                                </Row>)
                }
            </div>
            )
    }
}
export default CastMembers;