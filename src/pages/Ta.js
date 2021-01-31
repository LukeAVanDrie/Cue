import { useParams } from 'react-router-dom';

import { AuthUserContext, StudentCard } from '../components';

const Ta = () => {
    const { courseId } = useParams();
    console.log(courseId);
    return (
        <AuthUserContext.Consumer>
            {(authUser) => !authUser ? null : (
                <>
                    <StudentCard studentName="Matt Vav Antonio Linhart Patrick Murphy" questionText="Java syntax" room="141" />
                    <StudentCard studentName="Luke Van Drie Patrick Murphy" questionText="Pacman lair" room="112" notes="We want Matt" />
                </>
            )}
        </AuthUserContext.Consumer>
    );
};

export default Ta;
