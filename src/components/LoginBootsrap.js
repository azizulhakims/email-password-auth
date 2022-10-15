import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';


const auth = getAuth(app);

const LoginBootsrap = () => {
    const [success, setSuccess] = useState(false);
    const [userEmail, setUserEmail] = useState();


    const handleSubmit = (event) => {
        event.preventDefault();
        setSuccess(false);

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true);
            })

            .catch(error => {
                console.error('error', error);
            })



    }

    const handleEmailBlur = (event) => {
        const email = event.target.value;
        setUserEmail(email);
        console.log(email);

    }

    const handleForgetPassword = () => {

        if (!userEmail) {
            alert('Please enter your email address')
        }
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('Password Reset email sent. Please check your email.')
            })

            .catch(error => {
                console.error(error);
            })
    }


    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-success'>Please login !!</h3>
            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
                    <input onBlur={handleEmailBlur} type="email" className="form-control" id="formGroupExampleInput" placeholder="Your Email" name='email' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                    <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Your password" name='password' required />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>

            </form>
            {success && <p>Successfully login to the accounts</p>}

            <p><small>New to this website? Please <Link to='/register'>Register</Link></small></p>
            <p>Forget Password? <button type="button" onClick={handleForgetPassword} className="btn btn-link">Please Reset</button></p>
        </div>
    );
};

export default LoginBootsrap; <h3>Please login</h3>