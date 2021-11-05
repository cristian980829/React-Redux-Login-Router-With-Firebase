import React from 'react';
import { Link } from 'react-router-dom';
import { UseForm } from '../../hooks/useForm';

export const loginScreen = () => {

    const [ formValues, handleInputChange ] = UseForm({
        email: '',
        password: ''
    });

    const { email, password } = formValues;

    const handleLogin = (e) =>{
        e.preventDefault();
        console.log(email, password);
    }

    const handleGoogleLogin = () => {
        console.log('google login');
    }

    return (
        <form onSubmit={handleLogin}
        className="animate__animated animate__fadeIn animate__faster">
            <div className="mb-3">
                <label htmlFor="exampleInputText" className="form-label mb-3">Login</label>
                <input 
                    type="email" 
                    placeholder="Email" 
                    className="form-control" 
                    name="email"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }                        
               />
            </div>
            <div className="mb-3">
                <input 
                    type="password" 
                    placeholder="Password" 
                    className="form-control" 
                    name="password"
                    autoComplete="off"
                    value={ password }
                    onChange={ handleInputChange }
                />   
            </div>
            <div className="d-grid gap-2">
                <button className="btn btn-danger" type="submit">Login</button>
            </div>
            <div className="auth__social-networks">
                <div 
                    className="google-btn"
                    onClick={ handleGoogleLogin }
                >
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text">
                        <b>Sign in with google</b>
                    </p>
                </div>
            </div>

            <Link 
                    to="/auth/register"
                    className="link"
                >
                    Create new account    
            </Link>

        </form>
    )
}
