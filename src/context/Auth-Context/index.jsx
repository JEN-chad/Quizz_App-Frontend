import { Children, createContext, useContext, useReducer } from "react";
import { authReducer } from "../../Reducer/authReducer";

const AuthContext = createContext();
const initialState = {
    username: "",
    password: ""
}

const AuthProvider = ({children})=>{

    const [{ username, password }, authDispatch] = useReducer(authReducer, initialState);
    return(
        <AuthContext.Provider value={{ username, password, authDispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = ()=> useContext(AuthContext);

export {useAuth, AuthProvider }