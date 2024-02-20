import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
  updateCurrentUser,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../../firebase.Config";

export const AuthContext = createContext(null);

const Authprovider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setuser] = useState(null);

  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
      // logout user 
      const logOUtUser = () => {
        signOut(auth)
      }


  // state user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user is", currentUser);
      setuser(currentUser)
    });
    return () => unsubscribe();
  }, []);

  const info = { user, createUser, logOUtUser };
  // const info = {name : "Habib khan",age : 200}
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default Authprovider;
