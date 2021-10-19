import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
import useAurh from './../../hooks/UseAuth';
import Button from 'react-bootstrap/Button'

const Header = () => {
    const {user,logOut,name} = useAurh()
    

    return (
            <Navbar sticky="top" className="ciontainer-fluid background"  collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand  ><b style={{color:'white'}}>RDX Medical</b></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <NavLink className="comonNav" to="/home"activeStyle={{fontWeight: "bold",color: "red"}}> Home</NavLink>
                            <NavLink className="comonNav" to="/service"activeStyle={{fontWeight: "bold",color: "red"}}> OurService</NavLink>
                            <NavLink className="comonNav" to="/doctor"activeStyle={{fontWeight: "bold",color: "red"}}> Our Doctor</NavLink>
                            <NavLink className="comonNav" to="/about"activeStyle={{fontWeight: "bold",color: "red"}}> About Us</NavLink>
                            <NavLink className="comonNav" to="/login"activeStyle={{fontWeight: "bold",color: "red"}}> Login</NavLink>
                            <NavLink className="comonNav" to="/blog"activeStyle={{fontWeight: "bold",color: "red"}}> Blog</NavLink>
                        </Nav>
                        <Nav className="ms-auto">
                        {user.email ?<NavLink className="loginlogout" to="/login" onClick={logOut}> logOut</NavLink>:
                        
                        <NavLink className="loginlogout" to="/login"> Login</NavLink>}
                        <h6 className="mt-2 mx-2" style={{color:'white'}}>{user.displayName}</h6>
                        </Nav>
                        {user.email ? <img className="imglogin" src={user.photoURL}/> :<img src=""/> }
                        {name}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Header;