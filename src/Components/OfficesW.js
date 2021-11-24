import { Container, Row, Col, Button, FormControl, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import searchIcon from '../Images/searchIcon_white.svg';
import pics from '../Images/Officesimg.svg'

const OfficesW = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Our Offices</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur Lorem ipsum dolor sit amet,{" "}
          </p>
          <InputGroup className="my-3 explorer" >
             <InputGroup.Text id="btnGroupAddon" className='shadow exp-btn py-3 px-4'>Explorer</InputGroup.Text>

            <FormControl
               placeholder=" Explorer our LCs & Offices "
               aria-label="Recipient's username"
               aria-describedby="basic-addon2"
               className="place-exp shadow"
            />
            <Button variant="primary" size="lg" id="button-addon2" className="shadow btn-padding-exp">
            <img width="20px" src={searchIcon} alt="searchIcon" /> 
            </Button>
  </InputGroup>
        </Col>
        <Col>
          <img className="offimg" src={pics} alt="offImg" />
        </Col>
      </Row>
    </Container>
  );
};
export default OfficesW;
