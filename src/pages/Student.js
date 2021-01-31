import { AuthUserContext } from '../components';

const Student = () => {
    return (
        <AuthUserContext.Consumer>
            {(authUser) => !authUser ? null : (
                <h1>Student</h1>
            )}
        </AuthUserContext.Consumer>
    );
};

export default Student;
