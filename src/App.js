import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Home, Student, Ta } from './pages';
import { withFirebase, ProjectNavbar } from './components';

const App = ({ firebase, ...otherProps }) => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listener = firebase.auth.onAuthStateChanged((result) => {
            result ? setAuthUser(result) : setAuthUser(null);
        });

        return () => {
            listener();
        };
    }, [firebase.auth]);

    return (
        <Router>
            <ProjectNavbar authUser={authUser} />
            <Container>
                <Switch>
                    <Route exact path="/" render={
                        (props) => <Home authUser={authUser} {...props} />
                    } />
                    <Route exact path="/student" render={
                        (props) => <Student authUser={authUser} {...props} />
                    } />
                    <Route exact path="/ta" render={
                        (props) => <Ta authUser={authUser} {...props} />
                    } />
                </Switch>
            </Container>
        </Router>
    );
}

export default withFirebase(App);