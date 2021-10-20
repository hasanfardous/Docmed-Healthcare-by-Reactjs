import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import firebasesAppInit from "../Firebase/Initialize";

// Initialize the firebase app
firebasesAppInit();

const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Registration function
    const doTheRegistration = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            setError('');
            setSuccess('User created successfully!');
          })
          .catch((error) => {
            setSuccess('');
            setError(error.message);
        });
    }
  
    // Login function
    const doTheLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setUser(userCredential);
            setError('');
            setSuccess('Logged in successfully!');
        })
        .catch((error) => {
            setSuccess('');
            setError(error.message);
        })
    }
    
    // Signin using google
    const signInPopupUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message);
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        });
    }, []);

    // Google signout
    const doTheSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser([]);
            });
    }

    return {
        user,
        error,
        success,
        doTheRegistration,
        doTheLogin,
        signInPopupUsingGoogle,
        doTheSignOut
    }
}
    
export default useFirebase;