import { Container, Row, Col, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import OurEventsItem from "./BlogWComponents/OurEventsItem";
const Featured = () => {
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
    }
  ];
  return (
    <>
      <h1>Featured Events</h1>
      <Container>
        <Row>
          {ourEventsDatas.map((ourEventsData) => (
            <Col>
              <OurEventsItem key={ourEventsData.key} {...ourEventsData} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default Featured;
