import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(true)


  const createUserWithEmailAndPasswordFunc = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateProfileFunc = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };


  const signInWithEmailAndPasswordFunc = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInwithGoogleFunc = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };


  const signoutUserFunc = () => {
    setLoading(true)
    return signOut(auth);
  };

  const sendPasswordResetEmailFunc = (email) => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email);
  };

  const authInfo = {
    user,
    setUser,
    createUserWithEmailAndPasswordFunc,
    signInWithEmailAndPasswordFunc,
    signInwithGoogleFunc,
    signoutUserFunc,
    sendPasswordResetEmailFunc,
    updateProfileFunc,
    loading,
    setLoading,
  };

  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false)
    });
    return ()=>{
        unsubscribe()
    }
  }, []);

  // children=entire application
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;