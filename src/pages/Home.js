import { Col, Row } from 'react-bootstrap';

import { ClassCard } from '../components/ClassCard'

export const Home = ({ authUser, ...otherProps }) => {
    return !authUser ? null : (
        <>
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
