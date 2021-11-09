import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col, InputGroup ,FormControl, Button} from 'react-bootstrap';
import hiaiesec from '../Images/HiAiesec.svg';
import line from '../Images/Path1.svg';
import rect1 from '../Images/1strectangle.svg';
import rect2 from '../Images/2ndrectangle.svg';
import rect3 from '../Images/3rdrectangle.svg';
import rect4 from '../Images/4threctangle.svg';
import searchIcon from '../Images/searchIcon_white.svg';
import '../Welcome.css';

const Welcome = () => {
    return(
        <>
        <Container fluid >
          <Row style={{marginLeft: '2rem'}}>   
                 <Col style={{marginTop: '6rem', paddingLeft: '3rem'}} className="padd">
                 <div>
                    <h1>m3a AIESEC | YOU ARE THE CHANGE !</h1>
                    <img src={line} width="21%" alt ="line" />
                    <p className="text-style">Develop yourself through a cross-cultural experience abroad.</p>
                    <img className="rectangle" src={rect1} width="21%" alt ="rect1" />
                    <img className="rectangle" src={rect2} width="21%" alt ="rect2" />
                    <img className="rectangle" src={rect3} width="21%" alt ="rect3" />
                    <img className="rectangle" src={rect4} width="21%" alt ="rect4" />
                   </div>
                  
                </Col> 
                <Col className="padi">
                <img src={hiaiesec} width='100%' alt="Hi_aiesec" />
                </Col> 
     </Row> 

     <Container>
         <Row>
             <Col sm={7}>
             <InputGroup className="mb-3">
    <FormControl
      placeholder="Search for Places & Milestones "
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <Button variant="primary" size="lg" id="button-addon2">
    <img width="20px" src={searchIcon} alt="searchIcon" /> 
    </Button>
  </InputGroup>
             </Col>
         </Row>
     
  </Container>

        </Container>
        </>
    );
};

export default Welcome;