import { Nav, Navbar } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

export const ProjectNavbar = () => {
    const location = useLocation();

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">Cue</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link active={location.pathname === "/"} href="/">Home</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="#signout">Sign out</Nav.Link>
            </Nav>
        </Navbar>
    );
};
