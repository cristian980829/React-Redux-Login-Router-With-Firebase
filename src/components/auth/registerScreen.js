import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const { name ,email ,password ,password2 } = formValues;

    const handleRegister = (e) =>{
        e.preventDefault();
        console.log(name, email);
    }

    return (
        <form
        onSubmit={handleRegister}
        className="animate__animated animate__fadeIn animate__faster">
            <div className="mb-3">
                <label htmlFor="exampleInputText" className="form-label mb-3">Register</label>
                <input 
                    type="text" 
                    placeholder="Name" 
                    className="form-control"
                    name="name"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>
            <div className="mb-3">
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
            <div className="mb-3">
                <input 
                    type="password" 
                    placeholder="Confirm password" 
                    className="form-control" 
                    name="password2"
                    autoComplete="off"
                    value={ password2 }
                    onChange={ handleInputChange }
                />  
            </div>
            <div className="d-grid gap-2 mb-2">
                <button className="btn btn-danger" type="submit">Register</button>
            </div>

            <Link 
                    to="/auth/login"
                    className="link"
                >
                    Already registered?  
            </Link>

        </form>
    )
}
