import { Col, Row } from 'react-bootstrap';

import { AuthUserContext } from '../components';

const StudentWaiting = ({ studentsAhead, activeTas }) => {
    return (
        <AuthUserContext.Consumer>
            {(authUser) => !authUser ? null : (
                <>
                    <h1>You're in the queue!</h1>
                    <Row>
                        <Col className="students-ahead" md={5}>
                            <h1>5</h1>
                            <p>students ahead of you</p>
                        </Col>
                        <Col md={7}>
                            Active teaching assistants
                            <ul>
                                <li>Matty Vav</li>
                                <li>Antonio Linhart</li>
                            </ul>
                        </Col>
                    </Row>
                </>
            )}
        </AuthUserContext.Consumer>
    );
};

export default StudentWaiting;
