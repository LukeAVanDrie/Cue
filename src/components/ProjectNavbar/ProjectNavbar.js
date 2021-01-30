import { Button, Nav, Navbar } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

import { withFirebase } from '../Firebase';

const ProjectNavbar = ({ authUser, firebase, ...otherProps }) => {
    const location = useLocation();

    return (
        <Navbar className="nav-color" variant="dark" expand="lg">
            <Navbar.Brand href="/">Cue</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link active={location.pathname === "/"} href="/">Home</Nav.Link>
            </Nav>
            <Nav>
                {authUser ? (
                    <Button variant="cue" onClick={() => firebase.signOut()}>Sign Out</Button>
                ) : (
                    <Button variant="cue" onClick={() => firebase.signInWithGithub()}>Sign In</Button>
                )}
            </Nav>
        </Navbar>
    );
};

export default withFirebase(ProjectNavbar);