import Card from "react-bootstrap/Card"
import { Carousel } from "react-bootstrap"
import fantasy from "../data/fantasy.json"

const LatestRelease = () => {
    return ( 
    <Carousel style={{ width: "18rem", height: "32rem"}}>
    {fantasy.map((book) => (
        <Carousel.Item>
            <Card style={{ width: "18rem"}}>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
                <Card.Title>
                    {book.title}
                </Card.Title>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">£{book.price}</small>
            </Card.Footer>
            </Card>
        </Carousel.Item>
    ))}
</Carousel>);
}
 
export default LatestRelease ;