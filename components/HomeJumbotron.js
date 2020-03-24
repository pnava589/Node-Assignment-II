import { Jumbotron, Row, Col } from 'react-bootstrap';
export default function(props){
    const style = { backgroundImage: `url(/felix-mooneeram-evlkOfkQ5rE-unsplash.jpg)`, 
                    backgroundSize: 'cover',
                    height: `100vh`,
                    marginBottom: `0px`
                 };
    const creditStyle ={marginTop: `300px`};
    return(
        <Jumbotron fluid style={style}>
            {props.children}
            <Row  className="justify-content-center " style={creditStyle}>
                <Col sm={12} md={6} lg={4} className="text-center text-white">
                    Photo Credit: <a href="https://unsplash.com/@felixmooneeram">Felix Mooneeram</a>
                </Col>
            </Row>
        </Jumbotron>
    );
}