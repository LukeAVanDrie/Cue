import { Col, Row } from 'react-bootstrap';

import { AuthUserContext, ClassCard } from '../components'

export const Home = () => {
    return (
        <AuthUserContext.Consumer>
            {(authUser) => !authUser ? null : (
                <>
                    <h1>My Courses</h1>
                    <Row>
                        <Col sm={6}>
                            <ClassCard key={0} courseName="RAIK 183H" studentsInQueue={0} activeTas={0} />
                        </Col>
                        <Col sm={6}>
                            <ClassCard key={1} courseName="Keck III" studentsInQueue={0} activeTas={1} />
                        </Col>
                        <Col sm={6}>
                            <ClassCard key={2} courseName="CSCE 100" studentsInQueue={1} activeTas={1} />
                        </Col>
                        <Col sm={6}>
                            <ClassCard key={2} courseName="CSCE 100" studentsInQueue={0} activeTas={0} userIsTa />
                        </Col>
                        <Col sm={6}>
                            <ClassCard key={2} courseName="CSCE 100" studentsInQueue={3} activeTas={3} userIsTa />
                        </Col>
                    </Row>
                    <p class="h4">No courses found—please contact a teaching assistant to be added to your course!</p>
                </>
            )}
        </AuthUserContext.Consumer>
    );
};

export default Home;
