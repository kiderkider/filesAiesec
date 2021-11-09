import { Row, Col, Container } from "react-bootstrap";
const Global = (props) => {
       
      const condition = props.numero % 2 === 0 ? true : false

      return (
          <Container fluid>
             <p style={{fontSize: "59px"}}>{props.title}</p>

       
         {condition ?
         <Row>
         <Col>
         <img src={props.src1} alt={props.alt1} />
         <img src={props.src2} alt={props.alt2} />
         </Col> 
               <Col>
               <h3>{props.headingcol2}</h3>
                 <p>
                   {props.text}
                 </p>
                 <p>Learn more</p>
               </Col>
               </Row>
          :  
          <Row>
            <Col>
          <h3>{props.headingcol2}</h3>
            <p>
              {props.text}
            </p>
            <p>Learn more</p>
          </Col>
          <Col>
          <img src={props.src1} alt={props.alt1} />
          <img src={props.src2} alt={props.alt2} />
          </Col> 

          </Row>  }
        
          </Container>
      )
} ;

export default Global;