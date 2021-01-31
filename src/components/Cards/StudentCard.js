import { Badge, Button, Card, Col, Row } from 'react-bootstrap';

import './Card.css';

const StudentCard = ({ currentUserOccupied, helpedByCurrentUser, beingHelped, id, name, notes, onRemove, problemDescription, room, ...otherProps }) => {
    const taName = "Tony";
    const takeToggle = helpedByCurrentUser ? (
        <Button variant="cue" className="remove" block>Release this student</Button>
    ) : (
        <Button variant="cue" className="success" disabled={currentUserOccupied} block>Take this student</Button>
    );

    return (
        <Card>
            <Card.Body>
                <div>
                    {taName ? <Badge variant="primary" className="helping-ta-badge">TA: {taName}</Badge> : null}
                </div>
                <h2>{studentName}</h2>
                <Row>
                    <Col md={3}>
                        <Card.Text>
                            Question: {problemDescription}
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
                        <Button 
                            variant="cue" 
                            className="remove" 
                            disabled={beingHelped && !helpedByCurrentUser} 
                            block                                     
                            onClick={() => onRemove(id, name, notes, problemDescription, room)} 
                        >
                            Remove student
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default StudentCard;
