import { Link } from 'react-router-dom';

const Home = ({ authUser }) => {
    return !authUser ? null : (
        <ul>
            <li><Link to="/student">Student Page</Link></li>
            <li><Link to="/ta">TA Page</Link></li>
        </ul>
    );
};

export default Home;
