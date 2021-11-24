import BlogWItem from "./BlogWItem";
import { Container, Row, Col, Button, Alert, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import aiesecLogo from "/src/Images/aiesecLogo.svg";
import instagramIcon from "/src/Images/instagramIcon.svg";
import facebookIcon from "/src/Images/facebookIcon.svg";
import youtubeIcon from "/src/Images/youtubeIcon.svg";
import linkedinIcon from "/src/Images/linkedinIcon.svg";
import blogBigImg from "/src/Images/blogImages/blogBigImg.svg";
import blogImg1 from "/src/Images/blogImages/blogImg1.svg";
import blogImg2 from "/src/Images/blogImages/blogImg2.svg";
import blogImg3 from "/src/Images/blogImages/blogImg3.svg";
import "./BlogWHome.css";

const BlogWhome = (props) => {
  const leftDatas = {
    keye: "0",
    image_url: blogBigImg,
    information: "Lorem ipsum dolor sit amet, consetetur "
  };
  const rightDatas = [
    {
      keye: "1",
      image_url: blogImg1,
      information: "Lorem ipsum dolor sit amet, consetetur ",
      main_image: blogImg1,
      title_information: "cultural informational picture",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      thumbnail: aiesecLogo
    },
    {
      keye: "2",
      image_url: blogImg2,
      information: "Lorem ipsum dolor sit amet, consetetur "
    },
    {
      keye: "3",
      image_url: blogImg3,
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
      <div className="blogWHomeIcons">
        <img src={facebookIcon} />
        <img src={youtubeIcon} />
        <img src={instagramIcon} />
        <img src={linkedinIcon} />
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
