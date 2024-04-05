import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { createContext, useEffect, useState,  } from "react"
import { auth } from "../firbase/firbase.confiq"


export const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)


const createUser = (email, password) =>{
  setLoading(true);
   return createUserWithEmailAndPassword(auth, email, password)
}
const signIn = (email, password) =>{
  setLoading(true);
   return signInWithEmailAndPassword(auth, email, password)
}

const logOut = () =>{
  setLoading(true);
  return signOut(auth) 
}

useEffect(()=>{
const unSubscribe = onAuthStateChanged(auth, currentUser=>{
  console.log("user in the auth state changed", currentUser)
  setUser(currentUser)
  setLoading(false)
})
return ()=>{
  unSubscribe()
}
}, [])

  const authInfo = {
    user,
    loading,
      createUser,
      logOut,
      signIn
  }
  return (
    <AuthContext.Provider value={authInfo}>
     {children}
      </AuthContext.Provider>
  )
}
