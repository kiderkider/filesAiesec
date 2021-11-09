import React from "react";
import { Container } from "react-bootstrap";
import Global from "./Global";
import gt1 from '../Images/gt1.svg';
import gt2 from '../Images/gt2.svg';
import gte1 from '../Images/imen-lachheb.svg';
import gte2 from '../Images/laura-maria.svg';
import gv1 from '../Images/brenda.svg';
import gv2 from '../Images/gemrisha.svg';
import line from '../Images/Path1.svg';

const OurProduct = (props) => {
        

      return (
          <Container fluid style={{textAlign: 'center'}}>
             <h2 style={{fontSize: '71px'}}>Our Product</h2>
             <img src={line} width="21%" alt ="line" />
            <Global numero={0} title="Global Talent" src1={gt1} src2={gt2} alt1='gt1' alt2='gt2' headingcol2="BECOME AN INTERN"  />
            <Global numero={1} title="Global Teacher" src1={gte1} src2={gte2} alt1='gte1' alt2='gte2' headingcol2="BECOME A TEACHER"  />
            <Global numero={2} title="Global Volunteer" src1={gv1} src2={gv2} alt1='gv1' alt2='gv2' headingcol2="BECOME A VOLUNTEER"  />
          </Container>
      )
};

export default OurProduct;