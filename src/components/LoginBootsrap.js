import React from 'react';
import { Link } from 'react-router-dom';

const LoginBootsrap = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email;
        const password = form.password;
    }
    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-success'>Please login</h3>
            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Email </label>
                    <input type="email" className="form-control" id="formGroupExampleInput" placeholder="Your Email" name='email' required />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Password</label>
                    <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Your password" name='password' required />
                </div>
                <button type="button" className="btn btn-primary">Primary</button>

            </form>
            <p><small>New to this website? Please <Link to='/register'>Register</Link></small></p>
        </div>
    );
};

export default LoginBootsrap; <h3>Please login</h3>