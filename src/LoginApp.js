import React from 'react';
import { AppRouter } from './routers/AppRouter';
import { Provider } from 'react-redux';

import { store } from './store/store';

import './LoginApp.css';

export const LoginApp = () => {
    return (
        <div className="container mt-5">
            <Provider store={ store }>
                <AppRouter />
            </Provider>
        </div>
    )
}
