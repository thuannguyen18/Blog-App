import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import jwt from "jwt-decode";
import axios from "axios";
import reducer from "./reducer";

const AppContext = createContext();

const initalState = {
    name: '',
    email: '',
    password: '',
    loading: false,
    isAuthenticated: false,
    username: "",
    userEmail: "",
    userPassword: ""
}

function AppProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initalState);
    const { name, email, password } = state;

    const navigate = useNavigate();

    const setName = (value) => dispatch({ type: 'SET_NAME', payload: value });
    const setEmail = (value) => dispatch({ type: 'SET_EMAIL', payload: value });
    const setPassword = (value) => dispatch({ type: 'SET_PASSWORD', payload: value });

    const setUserName = (value) => dispatch({ type: "SET_USER_NAME", payload: value });
    const setUserEmail = (value) => dispatch({ type: "SET_USER_EMAIL", payload: value });
    const setUserPassword = (value) => dispatch({ type: "SET_USER_PASSWORD", payload: value });

    const signUpSubmit = async () => {
        dispatch({ type: 'LOADING' });
        try {
            const formData = { username: name, email, password };
            await axios.post('http://localhost:3500/auth/register', formData);
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
        dispatch({ type: 'SUBMITTED' });
    }

    const signInSubmit = async () => {
        dispatch({ type: 'LOADING' });
        try {
            const formData = { email, password };
            const response = await axios.post('http://localhost:3500/auth/login', formData);
            const token = response.data.accessToken;
            
            if (token) {
                localStorage.setItem("access_token", token);
                dispatch({ type: "AUTH_SUCCESS" });
                navigate("/post");
            }
            
        } catch (error) {
            console.log(error);
        }
        dispatch({ type: 'SUBMITTED' });
    }

    const logout = () => {
        localStorage.clear();
        dispatch({ type: "LOG_OUT" });
    }

    const getUser = async () => {
        try {
            const token = localStorage.getItem("access_token");
            const { UserInfo: { id: userId } } = jwt(token);
            const response = await axios.get(`http://localhost:3500/user/${userId}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            const { user: { username, email } } = response.data;
            dispatch({ type: "GET_USER", payload: { username, email }});
        } catch (error) {
            console.log(error);
        }
    }

    const updateUser = async () => {
        const { username, userEmail } = state;
        dispatch({ type: "LOADING" })
        try {
            const changedData = { username, email: userEmail }

            const token = localStorage.getItem("access_token");
            const { UserInfo: { id: userId } } = jwt(token);
            await axios.patch(`http://localhost:3500/user/${userId}`, changedData, {
                headers: { Authorization: `Bearer ${token}` }
            });

            dispatch({ type: "SUBMITTED" });
        } catch (error) {
            console.log(error);
        }
    }   

    return (
        <AppContext.Provider
            value={{
                ...state,
                setName,
                setEmail,
                setPassword,
                signUpSubmit,
                signInSubmit,
                logout,
                setUserName,
                setUserEmail,
                setUserPassword,
                getUser,
                updateUser
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {
    AppContext,
    AppProvider
}