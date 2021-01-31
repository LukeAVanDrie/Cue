import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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
        this.firestore = app.firestore();
        this.provider = new app.auth.GithubAuthProvider();
    }

    // Authentication and user management
    getUser = (userId) => {
        return this.firestore.doc(`users/${userId}`).get();
    }

    updateCreateUserFromGithub = (githubUser) => {
        const userRef = this.firestore.doc(`users/${githubUser.uid}`);

        const user = {
            uid: githubUser.uid,
            name: githubUser.displayName,
            email: githubUser.email,
            photoUrl: githubUser.photoURL
        }

        userRef.set(user, {merge: true });

        this.currentUser = user;
    }

    // Returns promise with the user
    signInWithGithub = () => {
        this.auth.signInWithPopup(this.provider).then((result) => {
            // const token = result.credential.accessToken;
            const user = result.user;
            this.updateCreateUserFromGithub(user);
        }).catch((error) => {
            // const { code, credential, email, message } = error;
            console.error(error);
        });
    }

    signOut = () => {
        this.auth.signOut();
    }

    // Courses

    /*
        Returns a promise

        From promise, see if document exists by calling doc.exists

        Get Course object using doc.data() method

        Course object consisting of:
            courseId: string
            name: string (Class name)
            owner: string (Id of owner)
            students: string[] (String of ids of students)
    */
    getCourse = (courseId) => {
        return this.firestore.doc(`courses/${courseId}`).get();
    }
}

export default Firebase;
