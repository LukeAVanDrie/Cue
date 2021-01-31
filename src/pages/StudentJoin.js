import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button, Col, Form, Row } from 'react-bootstrap';

import { withAuthUser, withFirebase } from '../components';

const StudentJoin = ({ authUser, firebase, ...otherProps }) => {
    const [problemDescription, setProblemDescription] = useState("");
    const [room, setRoom] = useState("");
    const [notes, setNotes] = useState("");
    const { courseId } = useParams();
    const history = useHistory();

    useEffect(() => {
        if (authUser) {
            firebase.firestore
                .collection("courses")
                .doc(courseId)
                .get()
                .then((result) => {
                    if (result.data().queue.find((student) => student.id === authUser.uid)) {
                        history.replace(`/student/${courseId}/waiting`);
                    }
                })
        }
    }, [authUser, courseId, firebase, history]);

    const handleInput = (setState) => (event) => setState(event.target.value);

    const handleSubmit = () => {
        firebase.firestore
            .collection("courses")
            .doc(courseId)
            .update({
                "queue": firebase.fieldValue.arrayUnion({
                    "id": authUser.uid,
                    "name": authUser.name,
                    "notes": notes,
                    "problemDescription": problemDescription,
                    "room": room
                })
            });

        history.replace(`/student/${courseId}/waiting`);
    };

    return !authUser ? <h1>Not logged in.</h1> : (
        <Row>
            <Col md={{span: 8, offset: 2}} className="large-top-margin">
                <h1>Put your name into the queue to get help</h1>
                <form>
                    <Form.Group>
                        <Form.Label className="h5">Briefly: what do you need help with? <span className="text-danger">(Required)</span></Form.Label>
                        <Form.Control as="textarea" rows={3} value={problemDescription} placeholder="A quick description of what you need help with" onInput={handleInput(setProblemDescription)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="h5">What room are you in?</Form.Label>
                        <Form.Control as="input" value={room} placeholder="Room name or number (optional)" onInput={handleInput(setRoom)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="h5">Is there anything else the TAs should be aware of?</Form.Label>
                        <Form.Control as="textarea" placeholder="Additional information (optional)" rows={3} value={notes} onInput={handleInput(setNotes)} />
                    </Form.Group>
                    <Form.Group>
                        <Button variant="cue" size="lg" disabled={problemDescription.length === 0} onClick={handleSubmit}>Put name into queue</Button>
                    </Form.Group>
                </form>
            </Col>
        </Row>
    );
};

export default withFirebase(withAuthUser(StudentJoin));
