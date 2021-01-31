import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Home, StudentJoin, StudentWaiting, Ta } from './pages';
import { withAuthentication, ProjectNavbar } from './components';

const App = () => {
    return (
        <Router>
            <ProjectNavbar />
            <Container>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/student/id/join" component={StudentJoin} />
                    <Route exact path="/student/id/waiting" component={StudentWaiting} />
                    <Route exact path="/ta" component={Ta} />
                </Switch>
            </Container>
        </Router>
    );
}

export default withAuthentication(App);
