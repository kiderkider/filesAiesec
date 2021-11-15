import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const BlogCreatorItem = (props) => {
  return (
    <>
      <img src={props.main_image} />
      <h2>{props.title_information}</h2>

      <Container>
        <Row>
          <Col>
            <p>{props.text}</p>
          </Col>
          <Col>
            <img src={props.thumbnail} alt="there is thumb alt here" />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default BlogCreatorItem;
