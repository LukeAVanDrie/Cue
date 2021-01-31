import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
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
                    <Route path="/student/:courseId/join" component={StudentJoin} />
                    <Route path="/student/:courseId/waiting" component={StudentWaiting} />
                    <Route path="/ta/:courseId" component={Ta} />
                    <Redirect to="/" />
                </Switch>
            </Container>
        </Router>
    );
}

export default withAuthentication(App);
