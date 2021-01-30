import { Link } from 'react-router-dom';

export const Home = () => {
    return <ul>
        <li><Link to="/student">Student Page</Link></li>
        <li><Link to="/ta">TA Page</Link></li>
    </ul>;
};
