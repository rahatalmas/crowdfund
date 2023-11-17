import { Children, createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({children}) =>{

    const [user,setUser] = useState({})
    const [auth,setAuth] = useState(false)
    return(
        <>
          <AuthContext.Provider value={{user,setUser,auth,setAuth}}>
            {
                children
            }
          </AuthContext.Provider>
        </>
    );
}

export default AuthContext;