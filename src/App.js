import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Home, Student, Ta } from './pages';
import { withAuthentication, ProjectNavbar } from './components';

const App = () => {
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

export default withAuthentication(App);
