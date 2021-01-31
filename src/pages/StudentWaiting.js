import { Form } from 'react-bootstrap';

import { AuthUserContext } from '../components';

const StudentWaiting = () => {
    return (
        <AuthUserContext.Consumer>
            {(authUser) => !authUser ? null : (
                <>
                    <h1>Waiting page</h1>
                </>
            )}
        </AuthUserContext.Consumer>
    );
};

export default StudentWaiting;
