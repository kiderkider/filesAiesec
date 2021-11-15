import { Carousel } from "react-bootstrap";
import line from "../Images/Path1.svg";
import global from "../Images/GlobalSlide.svg";
import regional from "../Images/regional.png";
import { useState } from "react";
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

const OurPartner = () => {
  const [partner, setPartner] = useState(true);
  const onGClickHandler = () => setPartner(true);
  const onRClickHandler = () => setPartner(false);
  const onIClickHandler = () => setPartner(!partner);
  return (
    <>
      <h2 style={{ fontSize: "71px" }}>Our Partner</h2>
      <img src={line} width="21%" alt="line" />

      <Row>
        <Col>
          <h2
            onClick={onGClickHandler}
            style={partner ? { color: "red" } : { color: "blue" }}
          >
            Global
          </h2>
        </Col>

        <Col>
          <h2
            onClick={onRClickHandler}
            style={!partner ? { color: "red" } : { color: "blue" }}
          >
            Regional
          </h2>
        </Col>
      </Row>

      <img src={partner ? global : regional} onClick={onIClickHandler} />
    </>
  );
};
export default OurPartner;
