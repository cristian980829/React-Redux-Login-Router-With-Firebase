import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const MainScreen = () => {
    const dispatch = useDispatch();
    const { name } = useSelector( state => state.auth );

    const hanleLogout = () => {
        dispatch( startLogout() )
    }

    return (
        <div>
            <h1>Main screen</h1>

            <span>Bienvenido: { name }</span>
            <div className="d-grid gap-2">
                <button className="btn btn-outline-danger mt-4"
                        onClick={ hanleLogout }>Logout</button>
            </div>
        </div>
    )
}
