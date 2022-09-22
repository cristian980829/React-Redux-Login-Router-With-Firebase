import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
import validator from 'validator';

// import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import {  startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [error, setError] = useState("");

    const [ formValues, handleInputChange ] = useForm({
        email: '',
        password: ''
    });

    const { email, password } = formValues;

    const handleLogin = (e) =>{
        e.preventDefault();
        if(isFormValid()){
            dispatch( startLoginEmailPassword( email, password ) );
        }

    }

    const handleLogin1 = (e) =>{
        e.preventDefault();
        setError('Usuario o contraseña incorrectos');
        // if(isFormValid()){
        //     dispatch( startLoginEmailPassword( email, password ) );
        // }

    }

    // const handleGoogleLogin = () => {
    //     dispatch( startGoogleLogin() );
    // }

    const isFormValid = () => {
        if ( !validator.isEmail( email ) ) {
            setError('Email is not valid');
            return false;
        } else if (password.length < 5 ) {
            setError('Password should be at least 6 characters');
            return false
        }
        setError("");
       return true;
    }

    return (
        <div style={{textAlign: 'center'}}>
            <div>
                <img style={{width: 100+'%', padding: 10+'px'}} src="https://www.politecnicojic.edu.co/images/img/portal-academico.jpg" alt="google button" />
            </div>  
            <br />
            <h5>Inicia sesión para realizar la encuesta</h5>
            <br />

            <div className="row">
                <div className="col-xs-14 col-sm-6 col-md-4 mx-auto">
                    <div className="card_login">
                        <div className="card">
                            <div className="card-body text-center">
                                <form 
                                    onSubmit={handleLogin1}
                                    className="animate__animated animate__fadeIn animate__faster">
                                    {
                                        error &&
                                        (
                                            <div className="alert alert-danger" role="alert">
                                                {error}
                                            </div>
                                        )
                                    }
                                    <div className="mb-3">
                                        <h5 htmlFor="exampleInputText" className="form-label mb-3">Inicia sesión con tu cuenta estudiantil</h5>
                                        <label style={{fontSize: 12+'px'}} htmlFor="exampleInputText" className="form-label mb-3">(En caso de no pertenecer al Politecnico Colombiano JIC puedes iniciar con tu cuenta de facebook en la parte inferior)</label>
                                        <input 
                                            type="email" 
                                            placeholder="Correo electrónico" 
                                            className="form-control" 
                                            name="email"
                                            autoComplete="off"
                                            required={true}                      
                                    />
                                    </div>
                                    <div className="mb-3">
                                        <input 
                                            type="password" 
                                            placeholder="Contraseña" 
                                            className="form-control" 
                                            name="password"
                                            autoComplete="off"
                                            required={true}
                                        />   
                                    </div>
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-success" type="submit">Iniciar sesion</button>
                                    </div>
                                    {/* <div className="auth__social-networks">
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
                                    </div> */}

                                    {/* <Link 
                                            to="/auth/register"
                                            className="link"
                                        >
                                            Create new account    
                                    </Link> */}

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <hr/>
            <br />


            <div className="row">
                <div className="col-xs-14 col-sm-6 col-md-4 mx-auto">
                    <div className="card_login">
                        <div className="card">
                            <div className="card-body text-center">
                                <form 
                                    onSubmit={handleLogin}
                                    className="animate__animated animate__fadeIn animate__faster">
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputText" className="form-label mb-3">Registrate con facebook</label>
                                        <input 
                                            type="email" 
                                            placeholder="Correo electrónico" 
                                            className="form-control" 
                                            name="email"
                                            autoComplete="off"
                                            value={ email }
                                            onChange={ handleInputChange }  
                                            required={true}                      
                                    />
                                    </div>
                                    <div className="mb-3">
                                        <input 
                                            type="password" 
                                            placeholder="Contraseña" 
                                            className="form-control" 
                                            name="password"
                                            autoComplete="off"
                                            value={ password }
                                            onChange={ handleInputChange }
                                            required={true}
                                        />   
                                    </div>
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-primary" type="submit">Iniciar sesion</button>
                                    </div>
                                    {/* <div className="auth__social-networks">
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
                                    </div> */}

                                    {/* <Link 
                                            to="/auth/register"
                                            className="link"
                                        >
                                            Create new account    
                                    </Link> */}

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
