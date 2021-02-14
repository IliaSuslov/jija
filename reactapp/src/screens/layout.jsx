import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './footer';

const Layout = props=>{
    return (
        <Container fluid>
            {props.header && (<Row>
              <Col>{props.header(props)}</Col>
            </Row>)}
            {props.body && (<Row>
              <Col>{props.body(props)}</Col>
            </Row>)}
            <hr/>
            <Row>
                <Col>
                  <Footer/>
                </Col>
            </Row>
    </Container>)
}

export default Layout
