import { AuthUserContext, StudentCard } from '../components';

const Ta = () => {
    return (
        <AuthUserContext.Consumer>
            {(authUser) => !authUser ? null : (
                <StudentCard studentName="Matt Vav" questionText="Java syntax" room="141" notes="I want Luke"/>
            )}
        </AuthUserContext.Consumer>
    );
};

export default Ta;
