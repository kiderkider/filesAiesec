import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const MostPopularItem = (props) => (
  <Container className="mr">
    <Row>
      <Col>
        <img src={props.image_url} alt="item" />
      </Col>
      <Col>{props.information}</Col>
    </Row>
  </Container>
);
export default MostPopularItem;
