import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import {Images} from "../../assets/index"
import { CartWidget } from './CartWidget'
import {NavLink } from 'react-router-dom'


export const NavBar = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <NavLink activeClassName={'navIt'} exact to="/"><img weight="218" height="40" src={Images[3]} alt="brand"/></NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink activeClassName={'navIt'} exact to="/category/alimentos">Alimentos</NavLink>
                        <NavLink activeClassName={'navIt'} exact to="/category/bebidas">Bebidas</NavLink>
                        <NavLink activeClassName={'navIt'} exact to="/category/congelados">Congelados</NavLink>
                        <NavLink activeClassName={'navIt'} exact to="/category/limpieza">Limpieza</NavLink>
                    
                    </Nav>
                    <Nav>
                        <NavLink activeClassName={'navIt'} exact to="/cart"><CartWidget/></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
              
        </>
    )
}
