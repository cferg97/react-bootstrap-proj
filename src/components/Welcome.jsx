import { Container } from "react-bootstrap"
import Jumbotron from "react-bootstrap/Jumbotron";

const Welcome = (props) => {
    return ( 
        <Jumbotron className="jumbo" fluid>
            <Container>
                <h1>{props.title}</h1>
                <p>
                    {props.desc}
                </p>
            </Container>
        </Jumbotron>
     );
}
 
export default Welcome;