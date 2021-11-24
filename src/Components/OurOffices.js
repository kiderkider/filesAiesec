import { Container, Row, Col, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CardItem from "./CardItem";
import office1 from '../Images/office1.svg';
import office2 from '../Images/office2.svg';
import office3 from '../Images/office3.svg';
import office4 from '../Images/office4.svg';
import office5 from '../Images/office5.svg';
import office6 from '../Images/office6.svg';

const OurOffices = () => {
  const ourEventsDatas = [
    {
      key: "0",
      image_url: office1 ,
      title: "LC constantine",
      class: "btn-full-1",
    },
    {
      key: "1",
      image_url: office2,
      title: "LC Babez ",
      class: "btn-full-2",
    },
    {
      key: "2",
      image_url: office3,
      title: "LC  Béjaïa ",
      class: "btn-full-3",
    },
    {
      key: "3",
      image_url: office4,
      title: "LC Benak ",
      class: "btn-full-4",
    },
    {
      key: "4",
      image_url: office5,
      title: "LC Blida ",
      class: "btn-full-5",
    },
    {
      key: "5",
      image_url: office6,
      title: "LC  Ouargla ",
      class: "btn-full-6",
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

