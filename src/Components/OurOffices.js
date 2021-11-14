import { Container, Row, Col, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CardItem from "./CardItem";
const OurOffices = () => {
  const ourEventsDatas = [
    {
      key: "0",
      image_url: "https://via.placeholder.com/150",
      title: "LC constantine"
    },
    {
      key: "1",
      image_url: "https://via.placeholder.com/150",
      title: "LC Babez "
    },
    {
      key: "2",
      image_url: "https://via.placeholder.com/150",
      title: "LC  Béjaïa "
    },
    {
      key: "3",
      image_url: "https://via.placeholder.com/150",
      title: "LC Benak "
    },
    {
      key: "4",
      image_url: "https://via.placeholder.com/150",
      title: "LC Blida "
    },
    {
      key: "5",
      image_url: "https://via.placeholder.com/150",
      title: "LC  Ouargla "
    }
  ];
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Our Offices</h1>
      <Container>
        <Row>
          {ourEventsDatas.map((ourEventsData) => (
            <Col>
              <CardItem key={ourEventsData.key} {...ourEventsData} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default OurOffices;
