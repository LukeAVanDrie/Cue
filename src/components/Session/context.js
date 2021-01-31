import React, { useEffect, useState } from 'react';

import { withFirebase } from '../Firebase';

const AuthUserContext = React.createContext(null);

export const withAuthentication = WrappedComponent => {
    const WithAuthentication = ({ firebase, ...otherProps }) => {
        const [authUser, setAuthUser] = useState(null);

        useEffect(() => {
            const listener = firebase.auth.onAuthStateChanged((result) => {
                if (result) {
                    firebase.getUser(result.uid).then((doc) => {
                        setAuthUser(doc.data());
                    })
                } else {
                    setAuthUser(null);
                }
            });

            return () => {
                listener();
            };
        }, [firebase]);
        
        return (
            <AuthUserContext.Provider value={authUser}>
                <WrappedComponent {...otherProps} />
            </AuthUserContext.Provider>
        );
    };

    return withFirebase(WithAuthentication);
};

export const withAuthUser = WrappedComponent => (props) => (
    <AuthUserContext.Consumer>
        {(authUser) => <WrappedComponent {...props} authUser={authUser} />}
    </AuthUserContext.Consumer>
);

export default AuthUserContext;
