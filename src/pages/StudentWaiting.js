import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button, Col, Row } from 'react-bootstrap';

import { withAuthUser, withFirebase } from '../components';

const StudentWaiting = ({ activeTas, authUser, firebase, studentsAhead, ...otherProps }) => {
    const [studentInfo, setStudentInfo] = useState();
    const { courseId } = useParams();
    const history = useHistory();

    useEffect(() => {
        if (authUser) {
            firebase.firestore
                .collection("courses")
                .doc(courseId)
                .onSnapshot((snapshot) => {
                    const studentEntry = snapshot.data().queue.find((student) => student.id === authUser.uid)
                    if (studentEntry) {
                        setStudentInfo(studentEntry);
                    } else {
                        history.replace(`/`);
                    }
                })
        }
    }, [authUser, courseId, firebase, history]);

    return !authUser ? null : (
        <>
            <h1 className="text-center">You're in the queue!</h1>
            <Row>
                <Col className="students-ahead" md={6}>
                    <span>5</span>
                    <p>students ahead of you</p>
                </Col>
                <Col className="active-tas" md={6}>
                    <span>Active teaching assistants</span>
                    <ul>
                        <li>Matty Vav</li>
                        <li>Antonio Linhart</li>
                    </ul>
                </Col>
            </Row>
            <div className="content-center">
                <Button 
                    variant="cue" 
                    className="remove mt-4" 
                    size="lg"
                    onClick={() => {
                        const { id, name, notes, problemDescription, room} = studentInfo;
                        firebase.removeStudentFromQueue(courseId, id, name, notes, problemDescription, room);
                        history.replace(`/`);
                    }}
                >
                    I no longer need help
                </Button>
            </div>
        </>
    );
};

export default withFirebase(withAuthUser(StudentWaiting));
