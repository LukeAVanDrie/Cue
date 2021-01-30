import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';

function App() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">Cue</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#signout">Sign out</Nav.Link>
                </Nav>
            </Navbar>
            <p>
                Test App
            </p>
        </div>
    );
}

export default App;
