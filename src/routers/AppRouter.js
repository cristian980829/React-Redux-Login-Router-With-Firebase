import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { firebase } from '../firebase/firebase-config'

import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { AuthRouter } from './AuthRouter';
import { MainScreen } from '../components/main/MainScreen';


export const AppRouter = () => {

    const dispatch = useDispatch();

    const [ checking, setChecking ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);



    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( async(user) => {

            if ( user?.uid ) {
                dispatch( login( user.uid, user.displayName ) );
                setIsLoggedIn( true );

            } else {
                setIsLoggedIn( false );
            }

            setChecking(false);

        });
        
    }, [ dispatch, setChecking, setIsLoggedIn ])


    if ( checking ) {
        return (
            <h1>Cargando...</h1>
        )
    }




    return (
        <Router>
            
            <Switch>
                <PublicRoute 
                    path="/auth"
                    component={ AuthRouter }
                    isAuthenticated={ isLoggedIn }
                />

                <PrivateRoute 
                    exact
                    isAuthenticated={ isLoggedIn }
                    path="/"
                    component={ MainScreen }
                />
                

                <Redirect to="/auth/login" />


            </Switch>
        </Router>
    )
}
