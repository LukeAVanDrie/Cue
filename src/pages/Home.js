import { Link } from 'react-router-dom';

import { FirebaseContext } from '../components/Firebase';

export const Home = () => {
    return (
        <FirebaseContext.Consumer>
            {(firebase) => {
                return (
                    <div>
                        <button onClick={() => firebase.signInWithGithub()}>sign in</button>
                        <button onClick={() => firebase.signOut()}>sign out</button>
                        <ul>
                            <li><Link to="/student">Student Page</Link></li>
                            <li><Link to="/ta">TA Page</Link></li>
                        </ul>
                    </div>
                )
            }}

        </FirebaseContext.Consumer>
    );
};
