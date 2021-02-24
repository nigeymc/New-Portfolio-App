import React from "react";
import { Navbar, Brand, Toggle, Collapse, Nav, Link, Container, Row, Col } from 'react-bootstrap';
import ProfilePic from "./ProfilePic";

const SideNav = () => (

    <Navbar expand="lg" variant="dark" bg="primary" fixed="top" id="sideNav">
        <Navbar.Brand href="/">
            <ProfilePic />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbarSupportedContent">
            <Nav activeKey={location.pathname} className="mr-auto">
                <ul className="navbar-nav">
                    <li className="nav-item"><Nav.Link href="/" activeclassname="active">Home</Nav.Link></li>
                    <li className="nav-item"><Nav.Link href="/about-me" activeclassname="active">About Me</Nav.Link></li>
                    <li className="nav-item"><Nav.Link href="/my-experience" activeclassname="active">My Experience</Nav.Link></li>
                    <li className="nav-item"><Nav.Link href="/my-skills" activeclassname="active">My Skills</Nav.Link></li>
                    <li className="nav-item"><Nav.Link href="/my-projects" activeclassname="active">My Projects</Nav.Link></li>
                    <li className="nav-item"><Nav.Link href="/contact-me" activeclassname="active">Contact Me</Nav.Link></li>
                </ul>
                <footer>&middot; Niall McKenna &copy; {new Date().getFullYear()} &middot;</footer>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export { SideNav as default };