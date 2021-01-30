const Ta = ({ authUser, ...otherProps }) => {
    return !authUser ? null : <h1>TA</h1>
};

export default Ta;
