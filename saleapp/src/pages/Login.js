import React from 'react'
import './Sale.css';

const Login = () => {
    return (
        <div>
            <div className='container content-container shadow-sm p-4'>
                <h2 className='text-center'>LOGIN FORM</h2>
                <div className="mb-3">
                    <label className='float-start'>Email address</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="float-start">Password</label>
                    <input className="form-control" type="password"></input>
                </div>
                <div className="mb-3">
                    <button type='submit' className="form-control btn btn-primary" id="submit" >Submit</button>
                </div>

            </div>
        </div>
    )
}

export default Login