import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateCurrentUser,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../../firebase.Config";

export const AuthContext = createContext(null);

const Authprovider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  // create user
  const createUser = (email, password) => {
    setloading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user 
  const loginUser = (email,password) => {
    setloading(true)
     return signInWithEmailAndPassword(auth, email, password)
  }

      // logout user 
      const logOutUser = () => {
        setloading(true)
        signOut(auth)
      }


  // state user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user is", currentUser);
      setuser(currentUser)
      setloading(false)
    });
    return () => unsubscribe();
  }, []);

  const info = { user, createUser, logOutUser, loginUser , loading};
  // const info = {name : "Habib khan",age : 200}
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default Authprovider;
