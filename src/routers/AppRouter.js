import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
  } from 'react-router-dom';

import { loginScreen } from '../components/auth/loginScreen';
import { registerScreen } from '../components/auth/registerScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div className="row">
                <div className="col-xs-14 col-sm-6 col-md-4 mx-auto">
                    <div className="card_login">
                        <div className="card">
                            <div className="card-body text-center">
                                <Switch>
                                    <Route 
                                        exact
                                        path="/auth/login"
                                        component={ loginScreen }
                                    />

                                    <Route 
                                        exact
                                        path="/auth/register"
                                        component={ registerScreen }
                                    />
                                    

                                    <Redirect to="/auth/login" />


                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    )
}