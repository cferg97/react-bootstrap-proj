import Card from "react-bootstrap/Card"
import { Container, Col, Row } from "react-bootstrap"
import fantasy from "../data/fantasy.json"

const LatestRelease = () => {
    return ( 
    <Container>
        <Row>
            <Col sm={12}>
                <h2 className="mb-4">Latest Releases</h2>
            </Col>
            <Col sm={12}>
                <Row>
                    {fantasy.slice(0,6).map((book) => (
                        <Col key={book.asin} md={4} className="mb-3">
                            <Card>
                                <Card.Img variant="top" src={book.img} className="imgTop"/>
                                <Card.Body>
                                    <Card.Header>
                                        {book.title}
                                    </Card.Header>
                                </Card.Body>
                                <Card.Footer className="text-muted">
                                    £{book.price}
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    </Container>
    )
}
 
export default LatestRelease ;