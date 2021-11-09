import { Carousel } from 'react-bootstrap';
import line from '../Images/Path1.svg';
import global from '../Images/GlobalSlide.svg';

const OurPartner = () => {
    return (
    <>
               <h2 style={{fontSize: '71px'}}>Our Partner</h2>
                <img src={line} width="21%" alt ="line" />

                <h2>Global</h2>
                <h2>Regional</h2>
  <Carousel>
  <Carousel.Item>
  <img src={global} alt="global" />
    <Carousel.Caption>
      
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <p>Show 2</p>

    <Carousel.Caption>
      <h3>Second slide label</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </>
    );
};
export default OurPartner;