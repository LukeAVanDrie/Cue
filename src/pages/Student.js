import { Form } from 'react-bootstrap';

import { AuthUserContext } from '../components';

const Student = () => {
    return (
        <AuthUserContext.Consumer>
            {(authUser) => !authUser ? null : (
                <>
                    <h1>Student</h1>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </>
            )}
        </AuthUserContext.Consumer>
    );
};

export default Student;
