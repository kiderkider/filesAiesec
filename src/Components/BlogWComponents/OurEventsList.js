import OurEventsItem from "./OurEventsItem";
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
const OurEventsList = () => {
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
    <div className="op">
      <h1>Our Events</h1>
      <Container>
        <Row>
          {ourEventsDatas.map((ourEventsData) => (
            <Col>
              <OurEventsItem key={ourEventsData.key} {...ourEventsData} />
            </Col>
          ))}
        </Row>
      </Container>

      <hr />
    </div>
  );
};

export default OurEventsList;
