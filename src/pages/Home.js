import { Col, Row } from 'react-bootstrap';

import { AuthUserContext, ClassCard } from '../components'

export const Home = () => {
    return (
        <AuthUserContext.Consumer>
            {(authUser) => !authUser ? null : (
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
            )}
        </AuthUserContext.Consumer>
    );
};

export default Home;
