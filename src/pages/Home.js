import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

import { AuthUserContext, ClassCard } from '../components'

export const Home = () => {
    return (
        <AuthUserContext.Consumer>
            {(authUser) => !authUser ? null : (
                <>
                    <ul>
                        <li><Link to="/student">Student Page</Link></li>
                        <li><Link to="/ta">TA Page</Link></li>
                    </ul>
                    <h2>My Courses</h2>
                    <Row>
                        <Col sm={6}>
                            <ClassCard/>
                        </Col>
                        <Col sm={6}>
                            <ClassCard/>
                        </Col>
                        <Col sm={6}>
                            <ClassCard/>
                        </Col>
                    </Row>
                </>
            )}
        </AuthUserContext.Consumer>
    );
};

export default Home;
