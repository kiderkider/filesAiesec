import { Col, Row, FormControl, InputGroup, Button, Container } from 'react-bootstrap';
import aiesecLogo from '../Images/aiesecLogo.svg';
import facebook from '../Images/facebook.svg';
import linkedin from '../Images/linkedin.svg';
import whatsapp from '../Images/whatsapp.svg';
import youtube from '../Images/youtube.svg';
import twitter from '../Images/twitter.svg';
import ScrollUp from '../Images/ScrollUp.svg';

const Footer = () =>{
    return (
        <Container fluid style={{padding:"5rem 5rem 0 5rem", textAlign: 'center'}}>
        <img src={aiesecLogo} alt='logobig' className='py-5' />

            <Row>
                <Col className="pt-5">
                <h4>About</h4>
                <p>About us</p>
                <p>Annual Report</p>

                <h4>Organizations</h4>
                <p>Partner with us</p>
                <p>Pricing</p>
                </Col>
                
                <Col className="pt-5">
                <h4>Youth</h4>
                <p>Youth 4 Global Goals</p>
                <p>Youth Speak</p>
                
                             <a style={{margin: '0.5rem'}} href="https://facebook.com">
                                     <img src={facebook} alt="facebook" />
                             </a>
                             <a style={{margin: '0.5rem'}} href="https://linkedin.com">
                                     <img src={linkedin} alt="linkedin" />
                             </a>
                             <a style={{margin: '0.5rem'}} href="https://youtube.com">
                                     <img src={youtube} alt="youtube" />
                             </a>
                             <a style={{margin: '0.5rem'}} href="https://whatsapp.com">
                                     <img src={whatsapp} alt="whatsapp" />
                             </a>
                             <a style={{margin: '0.5rem'}} href="https://twitter.com">
                                     <img src={twitter} alt="twitter" />
                             </a>  
                    <p style={{marginTop: '1rem',lineHeight: "1.8"}}>
                    Powered by  AIESEC <br/>
                    ©  1948-2021  AIESEC
                    </p>
                </Col>
                
                <Col className="pt-5">
                <h4>NEWS LATTER</h4>
                <p>stay update with last offers and news</p>
                
                <InputGroup style={{paddingLeft: '7rem', paddingRight: '4rem', }}>
    <FormControl
      type="email"
      placeholder="Enter your email"
      aria-label="email"
      aria-describedby="basic-addon2"
    />
    <Button variant="primary" size="lg" id="button-addon2">
    Send 
    </Button>
  </InputGroup>

                <h4>Membership</h4>
                <p>Join Us</p>
                <p>Find your country!</p>
                
                </Col>
            </Row>
        </Container>   
    );
};
export default Footer;