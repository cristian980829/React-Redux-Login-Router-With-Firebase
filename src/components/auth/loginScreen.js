import React from 'react';

export const loginScreen = () => {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputText" className="form-label mb-3">Login</label>
                <input type="email" placeholder="Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
            </div>
            <div className="mb-3">
                <input type="password" placeholder="Password" className="form-control" id="exampleInputPassword1"></input>
            </div>
            <div className="d-grid gap-2">
                <button className="btn btn-danger" type="button">Login</button>
            </div>
        </form>
    )
}
