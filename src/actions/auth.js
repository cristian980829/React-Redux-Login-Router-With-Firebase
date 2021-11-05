import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types';


export const startGoogleLogin = () => {
    return ( dispatch ) => {

        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                console.log(user);
                dispatch(
                    login( user.uid, user.displayName )
                )
            });

    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const startLogout = () => {
    return async( dispatch ) => {
        await firebase.auth().signOut();

        dispatch( logout() );
    }
}


export const logout = () => ({
    type: types.logout
})