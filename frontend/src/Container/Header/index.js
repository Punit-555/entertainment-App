import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../../Assets/images/logo.svg'
// import CardMoviesComponents from "../../components/CardMovies";
import { Link } from "react-router-dom";

const HeaderComponents = () => {
  const navData = [
    { name: "Movies", link: "/movies" },
    { name: "Tv Series", link: "/series" },
    { name: "Search", link: "/search" },
    { name: "Contact Us", link: "/contact" },
    { name: "About", link: "/about" },
  ];

  const logoStyle = {
    fontFamily: "Karla",
    // eslint-disable-next-line no-dupe-keys
    fontFamily: "Shantell Sans",
    textDecoration: "none",
    color: "white",
    fontSize: "2rem",
  };

  return (
    <header className="header">
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to={"/"} style={logoStyle}>
             <img src={logo} alt="Logo"/> Entertainment
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {navData.map((item) => {
                return (
                  <Nav key={item.name}>
                    <Link to={item.link}>{item.name}</Link>
                  </Nav>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default HeaderComponents;
