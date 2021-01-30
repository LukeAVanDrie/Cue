import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Home } from './pages/Home';
import { Student } from './pages/Student';
import { Ta } from './pages/Ta';

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProjectNavbar } from './components/ProjectNavbar';

export const App = () => {
    return (
        <Router>
            <ProjectNavbar />
            <Container>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/student" component={Student} />
                    <Route exact path="/ta" component={Ta} />
                </Switch>
            </Container>
        </Router>
    );
}
