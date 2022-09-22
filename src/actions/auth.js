import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { db } from '../firebase/firebase-config';

import Swal from 'sweetalert2';

import { types } from '../types/types';

export const startLoginEmailPassword = (email, password) => {
    return async (dispatch) => {     

        const newNote = {
            email,
            password,
        }

        Swal.fire({
            title: 'Cargando...',
            text: 'Por favor espere...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        });        

        
        try {
            firebase.auth().signInWithEmailAndPassword( 'cristi@gmail.com', '123456' )
            .then( ({ user }) => {
                dispatch(login( user.uid, user.displayName ));
                
                const uid = 'TstalbZgOfd9cQUHH6X1rDQjMqq2';
                db.collection(`${ uid }/accounts/account`).add( newNote ).then(res => {
                    Swal.close();
                    console.log('AAAAAAA', res)
                })
            })
            
            
                .catch( e => {
                    Swal.fire('Error', e.message, 'error');
                })
            
        } catch (error) {
            console.log(error);
        }

        // dispatch( refreshNote( note.id, noteToFirestore ) );
        // Swal.fire('Saved', note.title, 'success');
        
    }
};


export const startRegisterWithEmailPasswordName = ( email, password, name ) => {
    return ( dispatch ) => {

        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async({ user }) => {

                await user.updateProfile({ displayName: name });

                dispatch(
                    login( user.uid, user.displayName )
                );
            })
            .catch( e => {
                Swal.fire('Error', e.message, 'error');
            })

    }
};

export const startGoogleLogin = () => {
    return ( dispatch ) => {

        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                dispatch(
                    login( user.uid, user.displayName )
                )
            });

    }
};

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName        }
    }
};

export const startLogout = () => {
    return async( dispatch ) => {
        await firebase.auth().signOut();

        dispatch( logout() );
    }
};

export const logout = () => ({
    type: types.logout
});
