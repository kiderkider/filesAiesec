import { Col, Container, Row } from "react-bootstrap";
import airplane from '../Images/airplane.svg';
import Earth from '../Images/hold-world.svg';
import hotel from '../Images/hotel.svg';

const OurFeatures = () => {
    return (
        <Container fluid>
        <h5 style={{paddingLeft:'3rem', color:'#477DEE'}}>Our Features</h5>
        <Container fluid>
            <Row>
                <Col xs={1} className="p-5" >
                  <h3>Explorer Our Features</h3>
                </Col>

                <Col className="text-left" style={{marginLeft: '15rem', paddingLeft : '6rem', paddingRight: '6rem' }} >
                    <Row style={{padding: '3rem'}}>
                        <Col style={{margin: 'auto 0'}}>
                        <img src={airplane} alt='airplane' />
                        <div style={{paddingRight: '10rem'}}>
                        <p style={{color:'#2C3D4F'}}>114</p>
                        <p style={{color: '#2D3E50', opacity: '84%'}}>Countries & Territories</p>
                        </div>
                        
                        </Col>
                        
                        <Col style={{margin: 'auto 0'}}>
                        <img src={Earth} alt='earth' />
                        <div style={{paddingRight: '10rem'}}>
                        <p style={{color:'#2C3D4F'}}>+ 7,000</p>
                        <p style={{color: '#2D3E50', opacity: '84%'}}>Partner Organizations</p>
                        </div>
                        </Col>
                        
                        <Col style={{margin: 'auto 0'}}>
                        <img src={hotel} alt='hotel' />
                        <div style={{paddingRight: '10rem'}}>
                        <p style={{color:'#2C3D4F'}}>+ 30,000</p>
                        <p style={{color: '#2D3E50', opacity: '84%'}}>Experiences Every Year</p>
                        </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        </Container>
    );   
}
export default OurFeatures;