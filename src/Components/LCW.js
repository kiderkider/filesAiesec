import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaLinkedin
} from "react-icons/fa";
import OurEventsItem from "./BlogWComponents/OurEventsItem";
const LCW = () => {
  const ourEventsDatas = [
    {
      key: "0",
      image_url: "https://via.placeholder.com/150",
      information: "Lorem ipsum dolor sit amet, consetetur "
    },
    {
      key: "1",
      image_url: "https://via.placeholder.com/150",
      information: "Lorem ipsum dolor sit amet, consetetur "
    },
    {
      key: "2",
      image_url: "https://via.placeholder.com/150",
      information: "Lorem ipsum dolor sit amet, consetetur "
    },
    {
      key: "3",
      image_url: "https://via.placeholder.com/150",
      information: "Lorem ipsum dolor sit amet, consetetur "
    }
  ];
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>LC constantine</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur Lorem ipsum dolor sit amet,{" "}
            </p>
            <Form>
              <Form.Label>Explore</Form.Label>
              <Form.Control
                type="text"
                placeholder="Explorer our LCs & Offices"
              ></Form.Control>
              <Button />
            </Form>
            <div>
              <FaFacebookSquare />
              <FaYoutubeSquare />
              <FaInstagramSquare />
              <FaLinkedin />
            </div>
          </Col>
          <Col>
            <img src="https://via.placeholder.com/450" alt="450 img" />
          </Col>
        </Row>
      </Container>
      <h1>#Popular</h1>
      <Container>
        <Row>
          {ourEventsDatas.map((ourEventsData) => (
            <Col>
              <OurEventsItem key={ourEventsData.key} {...ourEventsData} />
            </Col>
          ))}
        </Row>
        <Row>
          <Col>
            <h4>{`<---  -->`}</h4>
          </Col>
          <Col>
            <Button variant="outline-dark">view all </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default LCW;
