import { useParams } from 'react-router-dom';

import { AuthUserContext, StudentCard } from '../components';

const Ta = () => {
    const { courseId } = useParams();
    console.log(courseId);
    const currentUserOccupied = true;
    return (
        <AuthUserContext.Consumer>
            {(authUser) => !authUser ? null : (
                <>
                    <StudentCard studentName="Matt Vav Antonio Linhart Patrick Murphy" questionText="Java syntax" room="141" helpedByCurrentUser={false} beingHelped={false} currentUserOccupied={currentUserOccupied} />
                    <StudentCard studentName="Luke Van Drie Patrick Murphy" questionText="Pacman lair" room="112" notes="We want Matt" helpedByCurrentUser={false} beingHelped={true} currentUserOccupied={currentUserOccupied} />
                    <StudentCard studentName="Ethan" questionText="I have a question about cue" room="110" helpedByCurrentUser={true} beingHelped={true} currentUserOccupied={currentUserOccupied} />

                </>
            )}
        </AuthUserContext.Consumer>
    );
};

export default Ta;
