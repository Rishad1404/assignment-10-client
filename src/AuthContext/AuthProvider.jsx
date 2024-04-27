import { createContext, useState } from "react";
import PropTypes from 'prop-types';
export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
   const [user,setUser]=useState(null)
   console.log(user)
   const authInfo={
    user,
    
}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};
AuthProvider.propTypes={
    children:PropTypes.object
}

export default AuthProvider;