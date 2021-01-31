import { Button, Card, Col, Row } from 'react-bootstrap';

import './Card.css';

const StudentCard = ({ studentName, questionText, room, currentUserOccupied, helpedByCurrentUser, beingHelped, notes }) => {
    const takeToggle = helpedByCurrentUser ? (
        <Button variant="cue" className="remove" block>Release this student</Button>
    ) : (
            <Button variant="cue" className="success" disabled={currentUserOccupied} block>Take this student</Button>
        );

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
                            {takeToggle}
                            <Button variant="cue" className="remove" disabled={beingHelped && !helpedByCurrentUser} block>Remove student</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default StudentCard;
