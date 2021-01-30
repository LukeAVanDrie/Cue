import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Home } from './pages/Home';
import { Student } from './pages/Student';
import { Ta } from './pages/Ta';

import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="/">Cue</Navbar.Brand>
                    <NavLink to="/" activeClassName="active">Home</NavLink>
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
