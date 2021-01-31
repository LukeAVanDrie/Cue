import { useState } from 'react';
import { Button, Form} from 'react-bootstrap';

import { AuthUserContext } from '../components';

const StudentJoin = () => {
    const [problemDescription, setProblemDescription] = useState("");
    const [room, setRoom] = useState("");
    const [notes, setNotes] = useState("");

    const handleInput = (setState) => (event) => setState(event.target.value);

    const handleSubmit = () => {
        console.log(problemDescription);
        console.log(room);
        console.log(notes);
    };

    return (
        <AuthUserContext.Consumer>
            {(authUser) => !authUser ? null : (
                <>
                    <h1>Put your name into the queue to get help</h1>
                    <form>
                        <Form.Group>
                            <Form.Label>In a sentence or two, what do you need help with?</Form.Label>
                            <Form.Control as="textarea" rows={3} value={problemDescription} onInput={handleInput(setProblemDescription)} />
                            <Form.Label>What room are you in?</Form.Label>
                            <Form.Control as="input" value={room} onInput={handleInput(setRoom)} />
                            <Form.Label>Is there anything else the TAs should be aware of?</Form.Label>
                            <Form.Control as="textarea" rows={3} value={notes} onInput={handleInput(setNotes)} />
                            <Button variant="cue" onClick={handleSubmit}>Submit</Button>
                        </Form.Group>
                    </form>
                </>
            )}
        </AuthUserContext.Consumer>
    );
};

export default StudentJoin;
