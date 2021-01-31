import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { WrappedButton } from './../Helpers';

import './Card.css';

const ClassCard = ({ activeTas, courseId, isTa, name, studentsInQueue, ...otherProps }) => {
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
        <>
            <Card.Text>Not currently active</Card.Text>
            <Card.Text>Waiting on a teaching assistant to join</Card.Text>
        </>
    );

    const actionButton = isTa ? (
        <Link to={`/ta/${courseId}`} component={WrappedButton} variant="cue">Start helping</Link>
    ) : (
        <Link to={`/ta/${courseId}`} component={WrappedButton} variant="cue">Start helping</Link>
    );

    return (
        <Card>
            <Card.Body>
                <h2>{name}</h2>
                {cardText}
                {actionButton}
            </Card.Body>
        </Card>
    );
}

export default ClassCard;
