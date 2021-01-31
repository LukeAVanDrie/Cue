import { Button, Col, Row } from 'react-bootstrap';

import { AuthUserContext } from '../components';

const StudentWaiting = ({ studentsAhead, activeTas }) => {
    return (
        <AuthUserContext.Consumer>
            {(authUser) => !authUser ? null : (
                <div className="desktop-top-margin-18vh">
                    <h1 className="text-center">You're in the queue!</h1>
                    <Row>
                        <Col className="students-ahead" md={6}>
                            <span>5</span>
                            <p>students ahead of you</p>
                        </Col>
                        <Col className="active-tas" md={6}>
                            <span>Active teaching assistants</span>
                            <ul>
                                <li>Matty Vav</li>
                                <li>Antonio Linhart</li>
                            </ul>
                        </Col>
                    </Row>
                    <div className="content-center">
                        <Button variant="cue" className="remove mt-4" size="lg">I no longer need help</Button>
                    </div>
                </div>
            )}
        </AuthUserContext.Consumer>
    );
};

export default StudentWaiting;
