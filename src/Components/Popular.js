import { Col, Container, Row } from "react-bootstrap";
import image1 from '../Images/image1.svg';
import image2 from '../Images/image2.svg';
import image3 from '../Images/image3.svg';
import image4 from '../Images/image4.svg'

const Popular = () => {
    return (
        <Container fluid>
        <h5 style={{paddingLeft:'3rem', color:'#477DEE'}}>Popular</h5>
        <h3 style={{paddingLeft:'3rem',marginTop: '3rem'}}>Our Blog</h3>
             <Container fluid>
                     <Row>
                    <Col>
                        <img src={image1} width="300" height="300" alt='image1' />
                    </Col>
                    <Col>
                    <img src={image2} width="300" height="300" alt='image2' />
                    </Col>
                    <Col>
                    <img src={image3} width="300" height="300" alt='image3' />
                    </Col>
                    <Col>
                    <img src={image4} width="300" height="300" alt='image4' />
                    </Col>
                     </Row>
              </Container>

        </Container>
    );   
}
export default Popular;