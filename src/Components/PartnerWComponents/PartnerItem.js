import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const PartnerItem = (props) => {
  if (props.condition) {
    return (
      <Container>
        <Row>
          <Col>
            <h3>{props.partnerTitle}</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            {console.log(props.condition)}
            <h2>{props.title}</h2>
            {props.content}
          </Col>
          <Col>
            <Row>
              <Col>
                <img src={props.imgOne} />
              </Col>
              <Col>
                <img src={props.imgTwo} />
              </Col>
            </Row>
            <Row>
              <Col>
                <img src={props.imgThree} />
              </Col>
              <Col>
                <img src={props.imgFour} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container>
        <Row>
          <Col>
            <h3>{props.partnerTitle}</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>
                <img src={props.imgOne} />
              </Col>
              <Col>
                <img src={props.imgTwo} />
              </Col>
            </Row>
            <Row>
              <Col>
                <img src={props.imgThree} />
              </Col>
              <Col>
                <img src={props.imgFour} />
              </Col>
            </Row>
          </Col>
          <Col>
            {console.log(props.condition)}
            <h2>{props.title}</h2>
            {props.content}
          </Col>
        </Row>
      </Container>
    );
  }
};
export default PartnerItem;
