import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import jwt from "jwt-decode";
import axios from "axios";

const AppContext = createContext();

const initalState = {
    name: '',
    email: '',
    password: '',
    loading: false,
    isAuthenticated: false,
    username: "",
    userEmail: "",
}

function reducer(state, action) {
    switch (action.type) {
        case 'SET_NAME': {
            return { ...state, name: action.payload };
        }
        case 'SET_EMAIL': {
            return { ...state, email: action.payload };
        }
        case 'SET_PASSWORD': {
            return { ...state, password: action.payload };
        }
        case 'SUBMITTED': {
            return { ...state, loading: false };
        }
        case 'LOADING': {
            return { ...state, loading: true };
        }
        case "AUTH_SUCCESS": {
            return { ...state, isAuthenticated: true };
        }
        case "FORM_DATA": {
            return { ...state, username: action.payload.username, userEmail: action.payload.email };
        }
        case "LOG_OUT": {
            return { 
                ...state, 
                isAuthenticated: false,
                email: "",
                password: ""
            };
        }
        default: return new Error('Invalid action');
    }
}

function AppProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initalState);
    const { name, email, password } = state;

    const navigate = useNavigate();

    const setName = (value) => dispatch({ type: 'SET_NAME', payload: value });
    const setEmail = (value) => dispatch({ type: 'SET_EMAIL', payload: value });
    const setPassword = (value) => dispatch({ type: 'SET_PASSWORD', payload: value });

    const signUpSubmit = async () => {
        dispatch({ type: 'LOADING' });
        try {
            await axios.post('http://localhost:3500/auth/register', { username: name, email, password });
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
        dispatch({ type: 'SUBMITTED' });
    }

    const signInSubmit = async () => {
        dispatch({ type: 'LOADING' });
        try {
            const response = await axios.post('http://localhost:3500/auth/login', { email, password });
            const token = response.data.accessToken;
            if (token) {
                localStorage.setItem("access_token", token);
                dispatch({ type: "AUTH_SUCCESS" });
                navigate("/dashboard");
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
            const { data } = await axios.get(`http://localhost:3500/user/${userId}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            const { user: { username, email } } = data;
            dispatch({ type: "FORM_DATA", payload: { username, email }});
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
                getUser
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