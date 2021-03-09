import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import {Link} from "react-router-dom";
const NavLink = props=>
    (<Nav.Link {...props} as={Link} to={props.href}/>);
const NavDropdownLink = props =>
    (<NavDropdown.Item {...props} as={Link} to={props.href}/>);
const Menu = (props)=>{
    return (<Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">{props.title}</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown title="Resin" id="basic-nav-dropdown">
        <NavDropdownLink href="/resins">All</NavDropdownLink>
        <NavDropdownLink href="/resins?tag=ABS">Abs Like</NavDropdownLink>
        <NavDropdownLink href="/resins?tag=Flex">Flex</NavDropdownLink>
        <NavDropdownLink href="/resins?tag=Water">Water</NavDropdownLink>
        <NavDropdown.Divider />
        <NavDropdownLink href="/resin/new">New</NavDropdownLink>

      </NavDropdown>
      {/*<Nav.Link href="#home">Firms</Nav.Link>*/}
        <NavLink href="/json">json</NavLink>
        <NavLink href="/compare">Compare</NavLink>
    </Nav>
    {/*<Form inline>*/}
    {/*  <Form.Control type="text" placeholder="Search" className="mr-sm-2" />*/}
    {/*  <Button variant="outline-success">Search</Button>*/}
    {/*</Form>*/}
  </Navbar.Collapse>
</Navbar>)
}
export default  Menu;
