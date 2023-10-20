"use client";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import logo from "./../../public/logo.svg";
import Button from "react-bootstrap/Button";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={logo} alt="bayelsa dream queen event logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/" className="text-white poppins">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="text-white poppins">
              About
            </Nav.Link>
            <Nav.Link href="/contact" className="text-white poppins">
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Button
              variant="secondary"
              size="lg"
              active
              className="h-14 w-44 custom-btn"
            >
              Register Now
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
