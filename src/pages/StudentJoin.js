import { Form } from 'react-bootstrap';

import { AuthUserContext } from '../components';

const StudentJoin = () => {
    return (
        <AuthUserContext.Consumer>
            {(authUser) => !authUser ? null : (
                <>
                    <h1>Put your name into the queue to get help</h1>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>In a sentence or two, what do you need help with?</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                        <Form.Label>What room are you in?</Form.Label>
                        <Form.Control as="input" />
                        <Form.Label>Is there anything else the TAs should be aware of?</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </>
            )}
        </AuthUserContext.Consumer>
    );
};

export default StudentJoin;
