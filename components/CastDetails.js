import { Card, Row, Col, Nav } from "react-bootstrap";
import DetailsCard from "./DetailsCard";
import CustomModal from "./CustomImageModal";

const CastDetails =(props)=>{
    const cast = props.cast;
    const imgUrl = "https://image.tmdb.org/t/p/w342"+cast.profile_path;
    const largeUrl = "https://image.tmdb.org/t/p/w780"+cast.profile_path;
    const imdbLink = "https://www.imdb.com/name/"+cast.imdb_id;
    const style = {height: 'inherit',overflowY: "scroll", overflowX: "hidden"};
    return(
        <Card className={props.className}>
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="cast">
                    <Nav.Item>
                            <Nav.Link onSelect={props.view} eventKey="movie">Movie Details</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#castMember" eventKey="cast">Cast Member Details</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body style={{overflowY: 'scroll'}}>
                <Card.Title>{cast.name}</Card.Title>
                <Row noGutters style={{height: '72vh'}}>
                    <Col xs={12} md={6} style={style}>
                        <CustomModal label={cast.name} smUrl={imgUrl} lgUrl={largeUrl}/>
                    </Col>
                    <Col xs={12} md={6} style={style}>
                        <DetailsCard label="Details">
                            <p>Born: {cast.birthday}, {cast.place_of_birth}</p>
                            <p><a href={imdbLink}>Imdb Link</a></p>
                        </DetailsCard>
                        <DetailsCard label="Biography">
                            <p>{cast.biography}</p>
                        </DetailsCard>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}
export default CastDetails;