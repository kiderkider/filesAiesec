import { Col, Container, Row } from "react-bootstrap";
import Aboutuus from '../Images/Aboutuus.jpg';
import line from '../Images/Path1.svg';
const Aboutus = () => {
    return (
            <>
            <h2>About Us</h2>
            <img src={line} width="21%" alt ="line" />
            <Container fluid>
                <Row>
                    <Col xs={6} style={{marginTop: '5rem'}}>
                    <p style={{fontSize: '35px', textAlign : "left"}}>
                    AIESEC is a global platform for young people  to develop their leadership potential through  international internships and volunteer  opportunities. Founded in 1948, AIESEC is a  non-governmental, and not-for-profit  organization entirely run by youth for 
                    </p>
                    </Col>
                    
                    <Col xs={6}>
                        <img src={Aboutuus} width="20%" alt='about_us' />
                    </Col>
                </Row>
            </Container>
            </>
    );
};
export default Aboutus;