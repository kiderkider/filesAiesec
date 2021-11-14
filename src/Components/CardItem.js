import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const CardItem = (props) => (
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={props.image_url} />
    <Card.Body style={{  margin: "auto" }}>
      <Card.Title>{props.title}</Card.Title>
      <Button variant="primary">Explore</Button>
    </Card.Body>
  </Card>
);
export default CardItem;
