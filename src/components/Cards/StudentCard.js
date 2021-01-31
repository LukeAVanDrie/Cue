import { Button, Card } from 'react-bootstrap';

import './Card.css';

const StudentCard = ({ studentName, questionText, room, notes }) => {
    return (
        <Card>
            <Card.Body>
                <h2>
                    {studentName}
                </h2>
                <Card.Text>
                    Question: {questionText}
                </Card.Text>
                <Card.Text>
                    Room: {room || "N/A"}
                </Card.Text>
                <Card.Text>
                    {!notes ? null : <>
                        Notes: {notes}
                    </>}
                </Card.Text>
                <Button variant="cue">Select Student</Button>
            </Card.Body>
        </Card>
    );
}

export default StudentCard;
