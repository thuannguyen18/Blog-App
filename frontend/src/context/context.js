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
    userName: "",
    userEmail: "",
    userPassword: "",
    userAvatar: null,
    title: "",
    content: "",
    blogs: [],
    articleTitle: "",
    articleContent: ""
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

    const setTitle = (value) => dispatch({ type: "SET_TITLE", payload: value }); 
    const setContent = (value) => dispatch({ type: "SET_CONTENT", payload: value }); 

    const setTitleUpdate = (value) => dispatch({ type: "SET_TITLE_UPDATE", payload: value }); 
    const setContentUpdate = (value) => dispatch({ type: "SET_CONTENT_UPDATE", payload: value }); 

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
            
            dispatch({ type: 'SUBMITTED' });
            
        } catch (error) {
            console.log(error);
            dispatch({ type: 'SUBMITTED' });
        }
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
            })
            const { user: { username, email, profilePictureURL } } = response.data;
            dispatch({ type: "GET_USER", payload: { username, email, profilePictureURL }});
        } catch (error) {
            console.log(error);
        }
    }

    const updateUser = async () => {
        const { userName, userEmail, userPassword } = state;

        dispatch({ type: "LOADING" });

        try {
            const changedData = { 
                username: userName, 
                email: userEmail,
                password: userPassword
            }

            const token = localStorage.getItem("access_token");
            const { UserInfo: { id: userId } } = jwt(token);

            await axios.patch(`http://localhost:3500/user/${userId}`, changedData, {
                headers: { Authorization: `Bearer ${token}` }
            });

            dispatch({ type: "SUBMITTED" });

            navigate("/user");

        } catch (error) {
            console.log(error);
        }
    } 

    const uploadFile = async (url) => {
        const formData = { avatar: url };

        try {
            const token = localStorage.getItem("access_token");
            const { UserInfo: { id: userId } } = jwt(token);

            await axios.post(`http://localhost:3500/user/${userId}/upload-file`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                }
            });    
            
        } catch (error) {
            console.log(error);
        }
    }

    const getAllBlogs = async () => {
        dispatch({ type: "LOADING" });

        try {
            const token = localStorage.getItem("access_token");

            const response = await axios.get("http://localhost:3500/blog", {
                headers: { 
                    Authorization: `Bearer ${token}`
                }
            });

            dispatch({ type: "GET_BLOGS", payload: response.data.blogs });
        } catch (error) {
            console.log(error);
            dispatch({ type: "SUBMITTED" });
        }
    }

    const getBlog = async (id) => {

        try {
            const token = localStorage.getItem("access_token");
            
            const response = await axios.get(`http://localhost:3500/blog/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const title = response.data.blog.title;
            const content = response.data.blog.content;
            const data = { title, content };

            dispatch({ type: "GET_BLOG_DETAIL", payload: data });
        } catch (error) {
            console.log(error);
        }
    }

    const createBlog = async () => {
        const { title, content } = state;

        dispatch({ type: "LOADING"});

        try {
            const token = localStorage.getItem("access_token");
            const { UserInfo: { id } } = jwt(token);

            const formData = { id, title, content };

            await axios.post("http://localhost:3500/blog", formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });


            dispatch({ type: "CREATED_BLOG" });
        } catch (error) {
            console.log(error);
        }
    }

    const deleteBlog = async (id) => {
        try {
            const token = localStorage.getItem("access_token");

            await axios.delete(`http://localhost:3500/blog/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            navigate("/user");
        } catch (error) {
            console.log(error);
        }
    }

    const updateBlog = async (id) => {
        const { articleTitle, articleContent } = state;
        try {
            const token = localStorage.getItem("access_token");

            const updatedData = { 
                title: articleTitle, 
                content: articleContent 
            };

            await axios.patch(`http://localhost:3500/blog/${id}`, updatedData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            navigate("/user");
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
                updateUser,
                uploadFile,
                setTitle,
                setContent,
                getAllBlogs,
                getBlog,
                createBlog,
                updateBlog,
                deleteBlog,
                setTitleUpdate,
                setContentUpdate
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