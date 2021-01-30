import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

import { ClassCard } from '../components/ClassCard'

export const Home = ({ authUser, ...otherProps }) => {
    return !authUser ? null : (
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
    );
};

export default Home;
