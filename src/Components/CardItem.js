import { Button, Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../Styles/CardItem.css';

const CardItem = (props) => (
  <Container className="py-5 d-grid gap-2">
  <Card className="card-style">
    <Card.Img variant="top" src={props.image_url} />
    <Card.Body style={{  margin: "auto" }}>
      <Card.Title>{props.title}</Card.Title>
      <Button className={props.class} variant="primary" size="lg">Explore</Button>
    </Card.Body>
  </Card>
  </Container>
);
export default CardItem;
