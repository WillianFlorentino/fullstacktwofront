import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

export default function Menu(props) {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#" as={Link} to="/">Menu</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Cadastros" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#" as={Link} to="/cliente">Partes Interessadas</NavDropdown.Item>
                            <NavDropdown.Item href="#" as={Link} to="/fornecedor">Projetos</NavDropdown.Item>
                            <NavDropdown.Item href="#" as={Link} to="/colaborador">Colaboradores</NavDropdown.Item>
                            <NavDropdown.Item href="#" as={Link} to="/cargo">Cargos</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Relatórios" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Partes Interessadas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Projetos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Colaboradores</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Cargos</NavDropdown.Item>
                           
                        </NavDropdown>
                        <Nav.Link href="#home">Sobre</Nav.Link>
                        <Nav.Link href="/login">Sair</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}