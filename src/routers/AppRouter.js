import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
  } from 'react-router-dom';

import { loginScreen } from '../components/auth/loginScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-5 mx-auto">
                    <div className="card_login">
                        <div className="card">
                            <div className="card-body text-center">
                                <Switch>
                                    <Route 
                                        path="/auth/login"
                                        component={ loginScreen }
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
