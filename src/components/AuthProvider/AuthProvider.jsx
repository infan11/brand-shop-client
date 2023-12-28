import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.confiq";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()
const AuthProvider = ({children}) => {
const [user , setUser] = useState(null);
const [loading , setLoading] = useState(true);

// create user
const createUser = (email , password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email ,password)
}
// google
const google = (email , password) =>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider);

}
// github
const github = (email , password) =>{
    setLoading(true);
    return signInWithPopup(auth, githubProvider)
}
//signin 

const loginUser = (email , password) =>{
    setLoading(true);
    return   signInWithEmailAndPassword (auth, email,password)
}

// sigout
const logOut = (email , password) =>{
    setLoading(true);
    return signOut(auth, email, password)

}
useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth , currentUser =>{
        setUser(currentUser);
    })
    return () =>{
        return unSubscribe()
    }
},[])
// authInfo
const authInfo = {
    user ,
    loading,
    createUser,
    google,
    github,
    loginUser,
    logOut
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;