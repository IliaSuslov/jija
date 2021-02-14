import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { HouseFill, Facebook, Twitter } from 'react-bootstrap-icons'

const Footer = props=> {
    return <Nav className="justify-content-center" activeKey="/">
                    <Nav.Item>
                      <Nav.Link href="/"><HouseFill/></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/"><Facebook/></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/"><Twitter/></Nav.Link>
                    </Nav.Item>
                  </Nav>;
}

export default Footer
