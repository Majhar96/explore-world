import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from '@firebase/auth';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import './Login.css'

const Login = () => {

    // set state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const auth = getAuth();

    const { signInUsingGoogle } = useAuth();
    const { signInUsingGithub } = useAuth();


    // handle email & password
    const emailHandleChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }


    // handle name change
    const handleNameChange = e => {
        setName(e.target.value);
    }

    // togle
    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }



    const handleSignup = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password should be at least 6 characters')
            return;
        }

        isLogin ? processLogin(email, password) : createNewUser(email, password);

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


    // new user function 

    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError(error.message)
            })
    }

    // set username
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .result(result => { })
    }

    // verification function
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
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
                <h3>Please {isLogin ? 'Login' : 'Signup'}</h3>
                <hr />
                <form onSubmit={handleSignup}>
                    {!isLogin && <div className="row mb-3">
                        <label htmlFor="inputAddress" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" onBlur={handleNameChange} className="form-control" id="inputAddress" placeholder="Your name" />
                        </div>
                    </div>}
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
                    <div className="row mb-3">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                                <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                    Already sign in
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3 text-danger">{error}</div>
                    <button type="submit" className="btn btn-success">{isLogin ? 'Login' : 'Signup'}</button>
                    <br /><br />
                    <button onClick={handleResetPassword} className="btn btn-secondary ">Reset Password</button>
                    <br /><br /><br />
                    <h3>Another way</h3>
                    <hr />
                    <div className="row mb-3">
                        <div className="col-sm-10 ms-5">
                            <button type="submit" onClick={signInUsingGoogle} className="btn btn-success"> Sign In Google</button>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-10 ms-5">
                            <button type="submit" onClick={signInUsingGithub} className="btn btn-success"> Sign In Github</button>
                        </div>
                    </div>

                </form>
                <br /><br />


            </div>
        </div>
    );
};

export default Login;