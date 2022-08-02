import { Nav, Container, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar expand="lg" variant="dark" bg="dark" className="mb-5">
      <Container>
        <Navbar.Brand href="/">Conecta-Tools</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contents">Conteúdos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="mr-auto">
            <Nav.Link href="/login">Entrar</Nav.Link>
            <Nav.Link href="/register">Registra-Se</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
