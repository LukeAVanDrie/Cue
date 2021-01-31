import { Button, Card } from 'react-bootstrap';

import './Card.css';

const ClassCard = ({ courseName, userIsTa, studentsInQueue, activeTas }) => {
    const cardText = activeTas > 0 ? (
            <>
                <Card.Text>
                    {studentsInQueue} {studentsInQueue === 1 ? "student" : "students"} in queue
                </Card.Text>
                <Card.Text>
                    {activeTas} active {activeTas === 1 ? "teaching assistant" : "teaching assistants"}
                </Card.Text>
            </>
        ) : (
            <Card.Text>
                Not currently active
            </Card.Text>
        );
    const actionButton = userIsTa ? (
            <Button variant="cue">Start helping</Button>
        ) : (
            <Button variant="cue" disabled={activeTas === 0}>Put name into queue</Button>
        );
    
    return (
        <Card>
            <Card.Body>
                <h2>
                    {courseName}
                </h2>
                {cardText}
                {actionButton}
            </Card.Body>
        </Card>
    );
}

export default ClassCard;
 