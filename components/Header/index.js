import { Container, Nav, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar expand="lg" variant="dark" bg="dark" className="mb-5">
       <Container>
        <Navbar.Brand href="#">Conecta Academy</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="mr-auto">
            <Nav.Link> Entrar </Nav.Link>
            <Nav.Link> Registrar-Se </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
