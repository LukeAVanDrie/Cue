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
        this.fieldValue = app.firestore.FieldValue;
        this.firestore = app.firestore();
        this.provider = new app.auth.GithubAuthProvider();
    }

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

    removeStudentFromQueue = (courseId, id, name, notes, problemDescription, room) => {
        this.firestore
            .collection("courses")
            .doc(courseId)
            .update({
                "queue": this.fieldValue.arrayRemove({
                    "id": id,
                    "name": name,
                    "notes": notes,
                    "problemDescription": problemDescription,
                    "room": room
                })
            });
    }
}

export default Firebase;
