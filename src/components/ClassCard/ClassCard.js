import { Button, Card } from 'react-bootstrap';

import './ClassCard.css';

const ClassCard = () => {
    return (
        <Card>
            <Card.Header as="h5">Class Name</Card.Header>
            <Card.Body>
                <Card.Text>
                    X Students in Queue
                </Card.Text>
                <Card.Text>
                    2 Active TAs
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default ClassCard;
