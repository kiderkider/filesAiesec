import BlogWItem from "./BlogWItem";
import { Container, Row, Col, Button, Alert, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaLinkedin
} from "react-icons/fa";

const BlogWhome = () => {
  const leftColContent = {
    key: "0",
    image_url: "https://via.placeholder.com/150",
    information: "Lorem ipsum dolor sit amet, consetetur "
  };
  const ResentDatas = [
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
      <BlogWItem />
    </div>
  );
};

export default BlogWhome;
