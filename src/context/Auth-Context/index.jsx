import {  createContext, useContext, useReducer } from "react";
import { authReducer } from "../../Reducer/authReducer";
import { useEffect } from "react";

const AuthContext = createContext();
const initialState = {
    username: "",
    password: "",
    token: "",
}

const AuthProvider = ({children})=>{

    useEffect(()=>{
      const token = localStorage.getItem("token");
      authDispatch({
        type: "INITIAL_STATE",
        payload: token
      })
    },[])
    const [{ username, password, token }, authDispatch] = useReducer(authReducer, initialState);
    return(
        <AuthContext.Provider value={{ username, password, token,  authDispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = ()=> useContext(AuthContext);

export {useAuth, AuthProvider }