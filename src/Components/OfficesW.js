import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const OfficesW = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Our Offices</h1>
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
        </Col>
        <Col>
          <img src="https://via.placeholder.com/450" alt="450 img" />
        </Col>
      </Row>
    </Container>
  );
};
export default OfficesW;
