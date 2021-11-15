import BlogWHome from "./BlogWComponents/BlogWHome";
import MostPopularList from "./BlogWComponents/MostPopularList";
import OurEventsList from "./BlogWComponents/OurEventsList";
import ResentList from "./BlogWComponents/ResentList";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import aiesecLogo from "/src/Images/aiesecLogo.svg";

const BlogW = () => {
  const rightDatas = [
    {
      keye: "0",
      image_url: "https://via.placeholder.com/150",
      information: "Lorem ipsum dolor sit amet, consetetur "
    },
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
  const changeContent = (key) => {
    if (key == 1) {
      console.log("this is key 1");
    } else console.log("not key 1");
  };
  return (
    <>
      <BlogWHome onChange={changeContent} />
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
