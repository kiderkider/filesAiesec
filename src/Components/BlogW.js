import BlogWHome from "./BlogWComponents/BlogWHome";
import MostPopularList from "./BlogWComponents/MostPopularList";
import OurEventsList from "./BlogWComponents/OurEventsList";
import ResentList from "./BlogWComponents/ResentList";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const BlogW = () => {
  return (
    <>
      <BlogWHome />
      <Container>
        <Row>
          <Col>
            <MostPopularList />
          </Col>
          <Col>
            <ResentList />
          </Col>
        </Row>
      </Container>
      <OurEventsList />
    </>
  );
};
export default BlogW;
