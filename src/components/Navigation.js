import React from 'react';
import styled from 'styled-components';
import {Navbar, Nav} from 'react-bootstrap'

function Navigation() {
    return (
        <NavigationContainer>
<Navbar bg="black"  expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" className='ms-auto' style={{backgroundColor:'white'}}/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto px-5">
        <Nav.Link href="#about" color='white'>O nas</Nav.Link>
        <Nav.Link href="#offer">Oferta</Nav.Link>
      </Nav>
      <Nav className="ms-auto px-5 py-1">
        <Nav.Link href="#gallery" color='white'>Galeria</Nav.Link>
        <Nav.Link href="#contact">Kontakt</Nav.Link>
      </Nav>
    </Navbar.Collapse>
</Navbar>
</NavigationContainer>
    );
}

export default Navigation;

const NavigationContainer = styled.div`
.nav-link { 
    color: #fff ! important;
    &:hover {
        background: var(--light-grey)
    };
    font-size: 25px;
    margin: 5px 20px 5px 20px
}`