import { Badge, Button, Card, Col, Row } from 'react-bootstrap';

import './Card.css';

const StudentCard = ({ currentUserOccupied, helpedByCurrentUser, beingHelped, id, name, notes, onHelp, onRemove, problemDescription, room, ...otherProps }) => {
    console.log(id)
    const takeToggle = helpedByCurrentUser ? (
        <Button 
            variant="cue" 
            className="remove" 
            block 
            onClick={() => onHelp(id, null)} 
        >
            Release this student
        </Button>
    ) : (
        <Button 
            variant="cue" 
            className="success" 
            disabled={currentUserOccupied} 
            block
            onClick={() => onHelp(null, id)} 
        >
            Take this student
        </Button>
    );

    return (
        <Card>
            <Card.Body>
                {!beingHelped ? null : (
                    <div>
                        <Badge variant="primary" className="helping-ta-badge">Currently being helped</Badge>
                    </div>
                )}
                <h2>{name}</h2>
                <Row>
                    <Col md={3}>
                        <Card.Text>
                            <Badge variant="secondary" className="metadata-badge">Question:</Badge> {problemDescription}
                        </Card.Text>
                    </Col>
                    <Col md={3}>
                        <Card.Text>
                            <Badge variant="secondary" className="metadata-badge">Notes:</Badge> {notes || "N/A"}
                        </Card.Text>
                    </Col>
                    <Col md={2}>
                        <Card.Text>
                            <Badge variant="secondary" className="metadata-badge">Room:</Badge>  {room || "N/A"}
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
