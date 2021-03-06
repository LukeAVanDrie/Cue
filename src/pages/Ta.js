import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { withAuthUser, withFirebase, StudentCard } from '../components';

const Ta = ({ authUser, firebase, ...otherProps }) => {
    const history = useHistory();
    const [course, setCourse] = useState();
    const { courseId } = useParams();
    const [canLeavePage, setCanLeavePage] = useState(false);

    useEffect(() => {
        const enableLeavePage = () => window.onbeforeunload = undefined;
        const disableLeavePage = () => window.onbeforeunload = () => true;
        if (canLeavePage) {
            enableLeavePage();
        } else {
            disableLeavePage();
        }

        // Run this when unloading the component:
        return enableLeavePage;
    }, [canLeavePage]);

    const handleDoneHelpingStudents = () => {
        const studentId = course.activeTas.find((ta) => ta.taId === authUser.uid).studentId;
        firebase.setActiveTa(false, courseId, studentId, authUser.uid, authUser.name);
        setCanLeavePage(true);
        history.replace("/");
    };

    useEffect(() => {
        let unsubscribe = null;
        if (authUser) {
            firebase.setActiveTa(true, courseId, null, authUser.uid, authUser.name);
            unsubscribe = firebase.firestore
                .collection("courses")
                .doc(courseId)
                .onSnapshot((snapshot) => {
                    setCourse(snapshot.data());
                });
        }

        return () => {
            if (unsubscribe) {
                unsubscribe() 
            };
        }

    }, [authUser, courseId, firebase]);

    const currentUserOccupied = authUser && course && course.activeTas.some((ta) => ta.taId === authUser.id);
    return !authUser ? null : (
        <>
            <h1>Student Queue <Button variant="cue" className="remove" size="sm" onClick={handleDoneHelpingStudents}>Done helping students</Button></h1>
            {course && course.queue.map((student) => {
                const interactions = course.activeTas.filter((ta) => ta.studentId === student.id);

                return (
                    <StudentCard 
                        beingHelped={interactions.length}
                        currentUserOccupied={currentUserOccupied}
                        key={student.id}
                        helpedByCurrentUser={interactions.some((interaction) => interaction.taId === authUser.uid)}
                        id={student.id}
                        name={student.name}
                        notes={student.notes}
                        problemDescription={student.problemDescription} 
                        room={student.room}
                        onHelp={(...args) => firebase.helpStudent(courseId, authUser.uid, authUser.name, ...args)}
                        onRemove={(...args) => {
                            firebase.helpStudent(courseId, authUser.uid, authUser.name, student.id, null);
                            firebase.removeStudentFromQueue(courseId, ...args);
                        }}
                    />
                );
            })}
        </>
    );
};

export default withFirebase(withAuthUser(Ta));
