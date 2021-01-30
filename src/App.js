import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Home } from './pages/Home';
import { Student } from './pages/Student';
import { Ta } from './pages/Ta';

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

export default function App() {
  return (
        <Router>
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="/">Cue</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#signout">Sign out</Nav.Link>
                    </Nav>
                </Navbar>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/student" component={Student} />
                    <Route exact path="/ta" component={Ta} />
                </Switch>
            </div>
        </Router>
  );
}
