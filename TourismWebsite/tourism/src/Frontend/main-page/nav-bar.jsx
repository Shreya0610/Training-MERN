import React from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import { Form,Button,FormControl } from "react-bootstrap";
 const Navigation = () =>(
  <Navbar bg="dark" variant="dark">
      <Container>
    <Navbar.Brand href="">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="">Home</Nav.Link>
      <Nav.Link href="">Places to visit</Nav.Link>
      <Nav.Link href="">Menu</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
    </Container>
  </Navbar>

)
export default Navigation;