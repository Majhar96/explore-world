import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import './Login.css'

const Login = () => {

    // set state

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const auth = getAuth();

    const { signInUsingGoogle, user } = useAuth();
    const { signInUsingGithub } = useAuth();


    // handle email & password
    const emailHandleChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleSignup = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password should be at least 6 characters')
            return;
        }

        processLogin(email, password)

    }

    // login function

    const processLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message)
            })
    }


    // reset password

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => { })
    }


    return (
        <div className="signUp-container mb-5 mt-5">
            <div className="signUp-child-container">
                <h3>Please Login</h3>
                <hr />
                <form onSubmit={handleSignup}>
                    <div className="row mb-3">
                        <label htmlFor="inputAddress" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputAddress" placeholder={user?.displayName} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input onBlur={emailHandleChange} type="email" className="form-control" id="inputEmail3" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input onBlur={
                                handlePasswordChange} type="password" className="form-control" id="inputPassword3" />
                        </div>
                    </div>
                    <div className="row mb-3 text-danger">{error}</div>
                    <button type="submit" className="btn btn-success">Login</button>
                    <br /><br />
                    <button onClick={handleResetPassword} className="btn btn-secondary ">Reset Password</button>
                    <br /><br /><br />
                    <h3>Another way</h3>
                    <hr />
                    <div className="row mb-3">
                        <div className="col-sm-10 ms-5">
                            <button type="submit" onClick={signInUsingGoogle} className="btn btn-success">Google Sign In</button>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-10 ms-5">
                            <button type="submit" onClick={signInUsingGithub} className="btn btn-success"> Github Sign In</button>
                        </div>
                    </div>

                </form>
                <br /><br />


            </div>
        </div>
    );
};

export default Login;