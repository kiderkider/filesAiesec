import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const ResentItem = (props) => {
  return (
    <Container className="mr">
      <Row>
        <Col>
          <img src={props.image_url} alt="item" />
        </Col>
        <Col>{props.information}</Col>
      </Row>
    </Container>
  );
};
export default ResentItem;
