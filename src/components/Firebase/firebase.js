import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.provider = new app.auth.GithubAuthProvider();
    }

    signInWithGithub = () => {
        this.auth.signInWithPopup(this.provider).then((result) => {
            // const token = result.credential.accessToken;
            // const user = result.user;
        }).catch((error) => {
            // const { code, credential, email, message } = error;
            console.error(error);
        });
    }

    signOut = () => {
        this.auth.signOut();
    }
}

export default Firebase;
