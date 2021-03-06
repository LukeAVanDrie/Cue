import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import { withAuthUser, withFirebase, ClassCard } from '../components'

const Home = ({ authUser, firebase, ...otherProps }) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        let unsubscribe = null;
        if (authUser) {
            unsubscribe = firebase.firestore
                .collection("courses")
                .where("members", "array-contains", authUser.uid)
                .onSnapshot((snapshot) => {
                    const updatedCourses = [];
                    snapshot.forEach((doc) => updatedCourses.push(doc.data()));
                    updatedCourses.sort((a, b) => a.name.localeCompare(b.name));
                    setCourses(updatedCourses);
                });
        }

        return () => {
            if (unsubscribe) {
                unsubscribe() 
            };
        }
    }, [authUser, firebase]);

    return !authUser ? null : (
        <>
            <h1>My Courses</h1>
            {courses.length ? (
                <Row>
                    {courses.map((course) => (
                        <Col key={course.id} md={6}>
                            <ClassCard
                                activeTas={course.activeTas.length}
                                courseId={course.id}
                                isTa={course.tas.includes(authUser.uid)}
                                name={course.name}
                                studentsInQueue={course.queue.length}
                            />
                        </Col>
                    ))}
                </Row>
            ) : (
                <p className="h4">No courses found—please contact a teaching assistant to be added to your course!</p>
            )}
        </>
    );
};

export default withFirebase(withAuthUser(Home));
