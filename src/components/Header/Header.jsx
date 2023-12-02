import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="container">
        <Navbar className="headerMain" data-bs-theme="success">
          <Container>
            <Navbar.Brand href="#home">
              <img src="./images/logo.png" alt="" />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Shoes</Nav.Link>
              <Nav.Link href="#features">Backpack</Nav.Link>
              <Nav.Link href="#features">Contact us</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
