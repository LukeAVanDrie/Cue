import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button, Col, Row } from 'react-bootstrap';
import { Checkmark } from 'react-checkmark';

import { withAuthUser, withFirebase } from '../components';

const StudentWaiting = ({ authUser, firebase, ...otherProps }) => {
    const [studentInfo, setStudentInfo] = useState();
    const [course, setCourse] = useState();
    const { courseId } = useParams();
    const history = useHistory();

    useEffect(() => {
        let unsubscribe = null;
        if (authUser) {
            unsubscribe = firebase.firestore
                .collection("courses")
                .doc(courseId)
                .onSnapshot((snapshot) => {
                    const studentEntry = snapshot.data().queue.find((student) => student.id === authUser.uid)
                    if (studentEntry) {
                        setStudentInfo(studentEntry);
                    } else {
                        history.replace(`/`);
                    }
                    
                    setCourse(snapshot.data());
                });
        }

        return () => {
            if (unsubscribe) {
                unsubscribe() 
            };
        }
    }, [authUser, courseId, firebase, history]);

    const studentsAhead = authUser && course && course.queue.findIndex((student) => student.id === authUser.uid);
    const activeTas = course && course.activeTas.filter((ta, idx, arr) => arr.indexOf(ta) === idx);

    return !authUser || !course ? null : (
        <div className="large-top-margin">
            {studentsAhead > 0 ?
                (<>
                    <h1 className="text-center">You're in the queue!</h1>
                    <Row>
                        <Col className="students-ahead" md={6}>
                            <span>{studentsAhead}</span>
                            <p>students ahead of you</p>
                        </Col>
                        <Col className="active-tas" md={6}>
                            <span>Active teaching assistants</span>
                            <ul>
                                {activeTas.map((ta) => (
                                    <li key={`${ta.taId}-${ta.studentId}`}>{ta.name}</li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                    <div className="content-center">
                        <Button
                            variant="cue"
                            className="remove mt-4"
                            size="lg"
                            onClick={() => {
                                const { id, name, notes, problemDescription, room } = studentInfo;
                                firebase.removeStudentFromQueue(courseId, id, name, notes, problemDescription, room);
                                history.replace(`/`);
                            }}
                        >
                            I no longer need help
                        </Button>
                    </div>
                </>
                ) : (
                <div className="text-center">
                    <Checkmark className="checkmark large-top-margin" size='200px' color='#A3BE8C' />
                    <h1>It's your turn!</h1>
                    <p>A teaching assistant should be with you shortly, if not already assisting you.</p>
                </div>
            )}
        </div>
    );
};

export default withFirebase(withAuthUser(StudentWaiting));
