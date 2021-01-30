import { Form } from 'react-bootstrap';

const Student = ({ authUser, ...otherProps }) => {
    return !authUser ? null : (
        <>
            <h1>Student</h1>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </>
    );
};

export default Student;
