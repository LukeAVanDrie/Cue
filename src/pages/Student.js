const Student = ({ authUser, ...otherProps }) => {
    return !authUser ? null : <h1>Student</h1>;
};

export default Student;
