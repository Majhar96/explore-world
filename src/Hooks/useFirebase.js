import { useEffect, useState } from "react";
import initializeAuthentication from '../Components/Login/Firebase/Firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";



initializeAuthentication();

const useFirebase = () => {
    // state declare
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth()

    // variable
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // login with google
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }


    // sign in with github
    const signInUsingGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user);
            })
    }


    // logout function
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }


    // useEffect
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    });

    return {
        user,
        error,
        signInUsingGoogle,
        signInUsingGithub,
        logout
    }
};

export default useFirebase;