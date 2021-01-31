import { Button, Card, Col, Row } from 'react-bootstrap';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';

import './Card.css';

const StudentCard = ({ studentName, questionText, room, notes }) => {
    return (
        <Card>
            <Card.Body>
                <h2>
                    {studentName}
                </h2>
                <Row>
                    <Col md={3}>
                        <Card.Text>
                            Question: {questionText}
                        </Card.Text>
                    </Col>
                    <Col md={3}>
                        <Card.Text>
                            Notes: {notes || "N/A"}
                        </Card.Text>
                    </Col>
                    <Col md={2}>
                        <Card.Text>
                            Room: {room || "N/A"}
                        </Card.Text>
                    </Col>
                    <Col md={4}>
                        <Button variant="cue" block>Select student</Button>
                        <Row>
                            <Col>
                                <Button variant="cue">
                                    <FaAngleUp />
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="cue">
                                    <FaAngleDown />
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default StudentCard;
