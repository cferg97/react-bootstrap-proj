import { Component } from "react"
import { Container, Row, Col, Carousel, CarouselItem } from "react-bootstrap"
import Welcome from "./Welcome"
import LatestRelease from "./LatestRelease"

class Home extends Component{
    render(){
        return (
            <Container className="text-center mt-2" style={{height: "100%"}}>
                <h1>Welcome to Epic Book Store</h1>
                <Welcome title="Welcome!" desc="We hope we will fulfil your book needs"/>
                <LatestRelease />
            </Container>
        )
    }
}
 
export default Home;