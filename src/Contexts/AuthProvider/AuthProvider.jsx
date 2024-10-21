// import React, { createContext, useEffect, useState } from "react";

// import {
//   GoogleAuthProvider,
//   createUserWithEmailAndPassword,
//   getAuth,
//   onAuthStateChanged,
//   sendPasswordResetEmail,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
//   updateProfile,
// } from "firebase/auth";
// import app from "../../Firebase/Firebase.config";
// import axios from "axios";

// export const AuthContext = createContext(null);
// const auth = getAuth(app);

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const googleProvider = new GoogleAuthProvider();

//   const createUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };
//   const login = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };
//   const forgetPassword = (email) => {
//     setLoading(true);
//     return sendPasswordResetEmail(auth, email);
//   };
//   const googleSignIn = () => {
//     setLoading(true);
//     return signInWithPopup(auth, googleProvider);
//   };
//   const updateUserProfile = (name) => {
//     return updateProfile(auth.currentUser, {
//       displayName: name,
//     });
//   };

//   const logOut = () => {
//     setLoading(true);
//     return signOut(auth);
//   };

//   // useEffect(() => {
//   //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//   //     setUser(currentUser);
//   //     console.log("current user", currentUser);
//   //     setLoading(false);
//   //   });
//   //   return () => {
//   //     return unsubscribe();
//   //   };
//   // }, []);

//     useEffect(()=>{
//       const unsubscribe = onAuthStateChanged(auth,currentUser =>{
//           setUser(currentUser)
//           // get and set token
//           if(currentUser){
//               axios.post('https://doc-house-server-side.vercel.app/jwt',{email:currentUser?.email})
//               .then(data =>{
//                   console.log(data.data.token)
//                   localStorage.setItem('access-token',data.data.token)
//                   setLoading(false)
//               })
//           }
//           else{
//               localStorage.removeItem('access-token')
//           }
//       })
//       return ()=>{
//         return unsubscribe();
//   }
//   },[])

//   const authInfo = {
//     createUser,
//     login,
//     user,
//     updateUserProfile,
//     logOut,
//     loading,
//     forgetPassword,
//     googleSignIn,
//   };
//   return (
//     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProvider;

import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase/Firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  // User creation
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login function
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Forget password
  const forgetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  // Google SignIn
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Update user profile
  const updateUserProfile = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  // Logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth).then(() => {
      setLoading(false); // Ensure loading state is false after logout
    });
  };

  // Authentication state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        // Fetch and set token
        axios
          .post("https://doc-house-server-side.vercel.app/jwt", {
            email: currentUser?.email,
          })
          .then((data) => {
            localStorage.setItem("access-token", data.data.token);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("access-token");
        setLoading(false); // Ensure loading stops even if user is logged out
      }
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    createUser,
    login,
    user,
    updateUserProfile,
    logOut,
    loading,
    forgetPassword,
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
