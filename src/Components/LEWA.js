import { Row,Col, Container } from "react-bootstrap";
import singup from '../Images/sign-up-image.svg';

const LEWA = () => {
    return (
        <Container fluid >
        <Row>
           <Col sm={5} >
                 <img src={singup} height='900' alt='sign-up_image' />
            </Col>  
            <Col style={{lineHeight : '3', marginTop: '2rem'}}>
            <h2 style={{fontSize : '46px'}}>SIGN UP</h2>
            <p style={{fontSize : '32px'}}>Sign up through <a href="https://www.w3schools.com">www.aiesec.org</a></p>
            <h2 style={{fontSize : '46px'}}>APPOINTMENT</h2>
            <p style={{fontSize : '32px'}}>Your local AIESEC office will contact you to set up a meeting</p>
            <h2 style={{fontSize : '46px'}}>SEARCH & APPLY</h2>
            <p style={{fontSize : '32px'}}>Check out our online database  and search through thousands  of professional internships & voluntary projects</p>
            <h2 style={{fontSize : '46px'}}>GET MATCHED</h2>
            <p style={{fontSize : '32px'}}>Found a project of your liking? Apply and get matched!</p>
            <h2 style={{fontSize : '46px'}}>PREPARE & GO</h2>
            <p style={{fontSize : '32px'}}>We will prepare you for your experience abroad through a  preparation seminar</p>
    </Col> 
      </Row> 
        </Container>
    );
};

export default LEWA;