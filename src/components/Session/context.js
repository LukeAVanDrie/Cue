import React, { useEffect, useState } from 'react';

import { withFirebase } from '../Firebase';

const AuthUserContext = React.createContext(null);

export const withAuthentication = WrappedComponent => {
    const WithAuthentication = ({ firebase, ...otherProps }) => {
        const [authUser, setAuthUser] = useState(null);

        useEffect(() => {
            const listener = firebase.auth.onAuthStateChanged((result) => {
                result ? setAuthUser(result) : setAuthUser(null);
            });

            return () => {
                listener();
            };
        }, [firebase.auth]);
        
        return (
            <AuthUserContext.Provider value={authUser}>
                <WrappedComponent {...otherProps} />
            </AuthUserContext.Provider>
        );
    };

    return withFirebase(WithAuthentication);
};

export default AuthUserContext;
