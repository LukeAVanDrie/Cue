import './ClassCard.css';
import { Button, Card } from 'react-bootstrap';

export const ClassCard = () => {
    return (
        <Card>
            <Card.Body>
                <h2>
                    Course Name
                </h2>
                <Card.Text>
                    X Students in Queue
                </Card.Text>
                <Card.Text>
                    2 Active TAs
                </Card.Text>
                <Button variant="cue">Join Queue</Button>
            </Card.Body>
        </Card>
    );
}
