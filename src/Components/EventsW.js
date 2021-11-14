import { Container, Row, Col, Carousel, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const EventsW = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/100x95"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/100X90"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/100x85"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container style={{ position: "absolute", top: "50%" }}>
        <Form>
          <Row>
            <Col>
              <Form.Control type="text" placeholder="e.g name" />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="category" />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="location" />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="date" />
            </Col>
            <Col>
              <Button>search</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};
export default EventsW;
