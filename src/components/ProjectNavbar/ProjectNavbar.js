import { Button, Nav, Navbar } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import { AuthUserContext } from '../Session';

const ProjectNavbar = ({ firebase, ...otherProps }) => {
    const location = useLocation();

    return (
        <Navbar className="nav-color" variant="dark" expand="lg">
            <Navbar.Brand href="/">Cue</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link active={location.pathname === "/"} href="/">Home</Nav.Link>
            </Nav>
            <Nav>
                <AuthUserContext.Consumer>
                    {(authUser) => authUser ? (
                        <Button variant="cue" className="generic" onClick={() => firebase.signOut()}>Sign out</Button>
                    ) : (
                        <Button variant="cue" className="signin" onClick={() => firebase.signInWithGithub()}>Sign in</Button>
                    )}
                </AuthUserContext.Consumer>
            </Nav>
        </Navbar>
    );
};

export default withFirebase(ProjectNavbar);