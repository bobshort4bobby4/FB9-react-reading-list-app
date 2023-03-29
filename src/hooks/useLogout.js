// firebase imports

import { signOut } from "firebase/auth"
import { auth } from "../firebase/config"
import { useAuthContext} from '../hooks/useAuthContext'
import { useState } from 'react'


export const useLogout = () => {
 
   const { dispatch } = useAuthContext()
   const [error, setError] = useState(null)

const logout = () => {
    signOut(auth)
     .then(() => {
         dispatch({type: 'LOGOUT'})
         console.log("user signed out")
     })
     .catch((err) => {
         setError(err.message)
        
     })

}

return { error, logout }

}