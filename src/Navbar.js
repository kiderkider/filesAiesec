import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Navbar, Container, Nav, FormControl, Form } from 'react-bootstrap';
import aiesecLogo from './Images/aiesecLogo.svg';
import but from './Images/Xbutton.svg';
import arrow from './Images/arrow.svg';
import './Navbar.css';


const NavBar = () => {
    return (
   <container fluid className="sticky-top">
 <Navbar bg="light">
  <Container fluid className="justify-content-start">
  <span className="ms-5 Bould">covid-19 notice :</span>
  <Navbar.Text className="ms-4 spoun">  Current Safety Information</Navbar.Text>
  <Nav.Link className="ms-5" eventKey="link-1">read more</Nav.Link>
  <img src={arrow} alt='arrow' height="10" weight="15" style={{marginTop: '0.1rem'}} />
  </Container>
  <img src={but} style={{marginRight: '0.75rem'}} alt='button' />  
</Navbar>


   {/*Second Navbar*/}
 <Navbar  className="nuv" bg="white" expand="lg">
  <Container fluid>
  <Navbar.Brand href="#home">
      <img
        src={aiesecLogo}
        width="50%"
        className="d-inline-block align-middle ms-5"
        alt="aiesec logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link style ={{color: "black"}} className="mx-2" href="#action1">Four Youth</Nav.Link>
        <Nav.Link style ={{color: "black"}} className="mx-2" href="#action2">Offices</Nav.Link>
        <Nav.Link style ={{color: "black"}} className="mx-2" href="#action1">Events</Nav.Link>
        <Nav.Link style ={{color: "black"}} className="mx-2" href="#action2">Blog</Nav.Link>
        <Nav.Link style ={{color: "black"}} className="mx-2" href="#action2">About us</Nav.Link>
      </Nav>
      <Form className="d-flex" >
      <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      </Form>
      <Button variant="primary">APPLY NOW</Button>
    </Navbar.Collapse>
  </Container>
</Navbar>

 </container>
    );
}
export default NavBar;