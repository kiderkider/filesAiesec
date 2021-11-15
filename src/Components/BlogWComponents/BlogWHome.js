import BlogWItem from "./BlogWItem";
import { Container, Row, Col, Button, Alert, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import aiesecLogo from "/src/Images/aiesecLogo.svg";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaLinkedin
} from "react-icons/fa";

const BlogWhome = (props) => {
  const leftDatas = {
    keye: "0",
    image_url: "https://via.placeholder.com/150",
    information: "Lorem ipsum dolor sit amet, consetetur "
  };
  const rightDatas = [
    {
      keye: "1",
      image_url: "https://via.placeholder.com/150",
      information: "Lorem ipsum dolor sit amet, consetetur ",
      main_image: aiesecLogo,
      title_information: "cultural informational picture",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      thumbnail: aiesecLogo
    },
    {
      keye: "2",
      image_url: "https://via.placeholder.com/150",
      information: "Lorem ipsum dolor sit amet, consetetur "
    },
    {
      keye: "3",
      image_url: "https://via.placeholder.com/150",
      information: "Lorem ipsum dolor sit amet, consetetur "
    },
    {
      keye: "4",
      image_url: "https://via.placeholder.com/150",
      information: "Lorem ipsum dolor sit amet, consetetur "
    }
  ];

  return (
    <div>
      <h1>Our Blog</h1>
      <h2>Get ready for the future with aiesec.</h2>
      <Alert style={{ width: "50%", margin: "auto" }}>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="enjoy with our blogs & achievements"
            className="me-2"
            aria-label="Search"
          />
          <Button>Search</Button>
        </Form>
      </Alert>
      <div>
        <FaFacebookSquare />
        <FaYoutubeSquare />
        <FaInstagramSquare />
        <FaLinkedin />
      </div>
      <Container>
        <Row>
          <Col>
            <BlogWItem
              key={leftDatas.keye}
              {...leftDatas}
              onChange={props.onChange}
            />
          </Col>
          <Col>
            {rightDatas.map((leftData) => (
              <BlogWItem
                key={leftData.keye}
                {...leftData}
                onChange={props.onChange}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogWhome;
