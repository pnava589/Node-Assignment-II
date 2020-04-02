import {  Col, Row } from "react-bootstrap";
const CrewMembers =(props)=>{
    props.crew.sort((a,b)=>{if(a.department>b.department) {return 1}
                                        if(a.department < b.department){return -1}
                                        if(a.department === b.department){
                                            if(a.name>b.name) return 1;
                                            if(a.name <b.name) return -1
                                            return 0;
                                        }
                                        return 0;
                                    });
    return(
        <div>
            <Row>
                <Col xs={4}>Department</Col>
                <Col xs={4}>Job</Col>
                <Col xs={4}>Name</Col>
            </Row>
            <hr/>
            {
                props.crew.map(member=>
                            <Row style={{marginBottom: "1em"}} key={member.credit_id}>
                                <Col xs={4}>{member.department}</Col>
                                <Col xs={4}>{member.job}</Col>
                                <Col xs={4}>{member.name}</Col>
                            </Row>)
            }
        </div>
    )
}
export default CrewMembers;