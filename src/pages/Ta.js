import { AuthUserContext } from '../components';

const Ta = () => {
    return (
        <AuthUserContext.Consumer>
            {(authUser) => !authUser ? null : (
                <h1>TA</h1>
            )}
        </AuthUserContext.Consumer>
    );
};

export default Ta;
