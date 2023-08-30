import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import jwt from "jwt-decode";
import axios from "axios";
import axiosConfig from "config/axiosConfig";

import reducer from "./reducer";

const AppContext = createContext();

const initalState = {
    // Alert Message for authentication
    isAlert: false,
    isSuccess: false,
    message: "",
    // Sign up & Sign in 
    username: "",
    email: "",
    password: "",
    // Blogs for home page 
    newestBlogs: [],
    randomBlogs: [],
    allBlogs: [],
    topBlogs: [],
    isAllTopics: true,
    isBestTopics: false,
    // Blog pagination 
    totalPages: "",
    currentPage: 1,
    activePage: 1,
    limitPerPage: 10,
    // Get blog detail 
    blogTitle: "",
    blogSubtitle: "",
    blogContent: "",
    blogPicturePath: "",
    blogCategory: "",
    // Get comments and pagination
    comments: [],
    nextComments: 1,
    isFinalComment: false,
    isHasComment: false,
    // Get blogs have same category and pagination
    categoryBlogs: [],
    categoryTotalPages: "",
    categoryCurrentPage: 1,
    categoryActivePage: 1,
    // Get author's information
    authorId: "",
    authorName: "",
    authorEmail: "",
    authorProfilePicturePath: "",
    authorBlogs: [],
    // Authorization 
    isAuthenticated: false,
    userBlogs: [],
    userId: "",
    userName: "",
    userEmail: "",
    userProfilePicturePath: "",
    // Account Setting
    isChange: false,
    userNameUpdate: "",
    userEmailUpdate: "",
    userAvatar: undefined,

    // ===================================================================
    // =====================================
    title: "",
    content: "",
    blogs: [],
    articleTitle: "",
    articleContent: "",
    userNameBlog: "",
    userIdBlog: "",
    otherUserAvatar: "",

    // ========== Blogs ==========

    // ========== Blog Update ==========
    blogIdUpdate: "",
    blogTitleUpdate: "",
    blogSubtitleUpdate: "",
    blogContentUpdate: [],
    blogPicturePathUpdate: "",
    blogCategoryUpdate: "",
    // ========== Loading ==========
    loading: false,
    feedLoading: false,
    commentLoading: false,
    updateUserLoading: false,
    changePasswordLoading: false,
}

function AppProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initalState);
    const navigate = useNavigate();

    // Set values for form sign up & sign in page
    const setName = (value) => dispatch({
        type: "SET_NAME",
        payload: value
    });
    const setEmail = (value) => dispatch({
        type: "SET_EMAIL",
        payload: value
    });
    const setPassword = (value) => dispatch({
        type: "SET_PASSWORD",
        payload: value
    });

    // Register user
    const signUp = async () => {
        dispatch({ type: "LOADING" });
        try {
            const payload = {
                username: state.username,
                email: state.email,
                password: state.password
            };
            const response = await axiosConfig.post("auth/register", payload);

            dispatch({
                type: "SIGN_UP_SUCCESS",
                payload: response.data.message
            });

            navigate("/login");
        } catch (error) {
            const message = error.response.data.message;
            dispatch({ type: "SIGN_UP_FAIL", payload: message });
        }
    }

    // Login user
    const signIn = async () => {
        dispatch({ type: "LOADING" });
        try {
            const payload = {
                email: state.email,
                password: state.password
            };
            const response = await axiosConfig.post("/auth/login", payload);
            const token = response.data.accessToken;

            if (token) {
                localStorage.setItem("access_token", token);
                const { UserInfo } = jwt(token);
                dispatch({ type: "AUTH_SUCCESS", payload: UserInfo });
                navigate("/");
            }

            dispatch({ type: "SIGN_IN_SUCCESS" });
        } catch (error) {
            const message = error.response.data.message
            dispatch({ type: "SIGN_IN_FAIL", payload: message });
        }
    }

    // Logout user
    const logout = () => {
        localStorage.clear();
        dispatch({ type: "LOG_OUT" });
    }

    // Close alert message when submit fail on Sign in page 
    const closeAlertMessage = () => dispatch({ type: "CLOSE_ALERT_MESSAGE" });

    // Get random  & newest blog
    const getBlogs = async (dispatchType, queryType) => {
        dispatch({ type: "LOADING" });
        try {
            const response = await axiosConfig.get(`/blog?${queryType}=true&limit=4`);

            dispatch({
                type: dispatchType,
                payload: response.data
            });
        } catch (error) {
            console.log(error);
        }
    }

    // Get all blogs for home page (pagination)
    const getAllBlogs = async () => {
        dispatch({ type: "FEED_LOADING" });
        try {
            const response = await axiosConfig
                .get(`/blog?page=${state.currentPage}&limit=${state.limitPerPage}`);

            dispatch({
                type: "GET_ALL_BLOGS",
                payload: response.data
            });
        } catch (error) {
            console.log(error);
        }
    }

    // Get all blogs which have the most like for home page (pagination)
    const getTopBlogs = async () => {
        dispatch({ type: "FEED_LOADING" });
        try {
            const response = await axiosConfig
                .get(`/blog?sort=top&page=${state.currentPage}&limit=${state.limitPerPage}`);

            dispatch({
                type: "GET_TOP_BLOGS",
                payload: response.data
            });
        } catch (error) {
            console.log(error);
        }
    }

    // Set values to get the specific topic
    const setAllTopics = () => dispatch({ type: "SET_ALL_TOPICS" });
    const setBestTopics = () => dispatch({ type: "SET_BEST_TOPICS" });

    // Pagination in home page
    const changePage = (page) => dispatch({
        type: "CHANGE_PAGE",
        payload: page
    });

    // Get blog detail and comments belong to that blog
    const getBlogDetail = async (id) => {
        dispatch({ type: "LOADING" });
        try {
            const response = await Promise.all([
                axiosConfig.get(`/blog/${id}`),
                axiosConfig.get(`/blog/${id}/comments?page=1&limit=5`)
            ]);

            dispatch({
                type: "GET_BLOG_DETAIL",
                payload: response[0].data
            });

            dispatch({
                type: "GET_COMMENTS",
                payload: response[1].data
            });
        } catch (error) {
            console.log(error);
        }
    }

    // Load more comments
    const getMoreComments = async (id) => {
        dispatch({ type: "COMMENT_LOADING" });
        try {
            const response = await axiosConfig
                .get(`/blog/${id}/comments?page=${state.nextComments += 1}&limit=5`);

            dispatch({
                type: "GET_MORE_COMMENTS",
                payload: response.data
            });
        } catch (error) {
            console.log(error);
        }
    }

    // Get blogs which have same category
    const getCategoryBlogs = async (category) => {
        dispatch({ type: "LOADING" });
        try {
            const response = await axiosConfig
                .get(`/blog/category?name=${category}&page=${state.categoryCurrentPage}`);
            
            dispatch({
                type: "GET_CATEGORY_BLOGS",
                payload: response.data
            });
        } catch (error) {
            console.log(error);
        }
    }

    // Get author's information when user wants to know who writes this blog
    const getAuthor = async (id) => {
        dispatch({ type: "LOADING" });
        try {
            const response = await axiosConfig.get(`/user/${id}`); // /author/:id
            dispatch({
                type: "GET_AUTHOR",
                payload: response.data
            });
        } catch (error) {
            console.log(error);
        }
    }

    // Get user's blog who has authorized
    const getUserBlog = async (id) => {
        dispatch({ type: "LOADING" });
        try {
            const token = localStorage.getItem("access_token");
            const response = await axiosConfig.get(`/user/${id}/user-blog`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            dispatch({
                type: "GET_USER_BLOG",
                payload: response.data
            });
        } catch (error) {
            console.log(error);
        }
    }

    // User Account Settings
    const setUserAvatar = (value) => dispatch({
        type: "SET_USER_AVATAR",
        payload: value
    });
    const setUserName = (value) => dispatch({
        type: "SET_USER_NAME",
        payload: value
    });
    const setUserEmail = (value) => dispatch({
        type: "SET_USER_EMAIL",
        payload: value
    });
    const setDefault = () => dispatch({ type: "SET_DEFAULT" });

    // Update user's information
    const updateUser = async () => {
        dispatch({ type: "UPDATE_USER_LOADING" });

        const token = localStorage.getItem("access_token");

        const formData = new FormData();
        formData.append("username", state.userNameUpdate);
        formData.append("email", state.userEmailUpdate);

        if (state.userAvatar) {
            formData.append("picture", state.userAvatar);
        } else {
            formData.append("picture", null);
        }

        // for (let key of formData.entries()) {
        //     console.log(key[0] + ', ' + key[1]);
        // }

        try {
            const response = await axiosConfig.patch(`/user/${state.userId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            dispatch({
                type: "UPDATE_USER_SUCCESS",
                payload: response.data
            });
            
            navigate("/user");
            toast.success("Update success");
        } catch (error) {
            console.log(error);
            dispatch({ type: "UPDATE_USER_FAIL" });
        }
    }

    // Change password in user settings
    const changePassword = async (payload) => {
        dispatch({ type: "CHANGE_PASSWORD_LOADING" });
        
        try {
            const token = localStorage.getItem("access_token");
            const response = await axiosConfig
                .patch(`/user/${state.userId}/change-password`, payload, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

            dispatch({
                type: "CHANGE_PASSWORD_SUCCESS",
                payload: response.data
            });
            toast.success("Change password success");
        } catch (error) {
            console.log(error);
        }
    }

    // Create a new blog by user
    const createBlog = async (blogInfo) => {
        dispatch({ type: "LOADING" });

        const token = localStorage.getItem("access_token");

        const formData = new FormData();
        formData.append("userId", state.userId)
        formData.append("title", blogInfo.title);
        formData.append("subTitle", blogInfo.subTitle);
        formData.append("content", JSON.stringify(blogInfo.content));
        formData.append("category", blogInfo.category);

        if (blogInfo.thumbnail) {
            formData.append("picture", blogInfo.thumbnail);
        } else {
            formData.append("picture", null);
        }

        // for (let key of formData.entries()) {
        //     console.log(key[0] + ', ' + key[1]);
        // }

        try {
            const response = await axiosConfig.post("/blog", formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            dispatch({
                type: "CREATE_BLOG_SUCCESS",
                payload: response.data
            });

            navigate(`/blog/${response.data.blogCreated._id}`);
            toast.success("Your post is created");
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    }

    // Delete a blog by user
    const deleteBlog = async (id) => {
        const token = localStorage.getItem("access_token");

        try {
            await axiosConfig.delete(`/blog/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            navigate("/");
            toast.success("Delete success");
        } catch (error) {
            console.log(error);
            toast.error("Delete fail");
        }
    }









    // @access: private --- Create a new blog by user
    const setTitle = (value) => dispatch({ type: "SET_TITLE", payload: value });
    const setContent = (value) => dispatch({ type: "SET_CONTENT", payload: value });

    const setTitleUpdate = (value) => dispatch({ type: "SET_TITLE_UPDATE", payload: value });
    const setContentUpdate = (value) => dispatch({ type: "SET_CONTENT_UPDATE", payload: value });

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
                signUp,
                signIn,
                logout,
                setUserAvatar,
                setUserName,
                setUserEmail,
                setDefault,
                getAuthor,
                updateUser,
                changePassword,
                setTitle,
                setContent,
                getUserBlog,
                getAllBlogs,
                getBlogDetail,
                createBlog,
                updateBlog,
                deleteBlog,
                setTitleUpdate,
                setContentUpdate,
                getBlogs,
                getTopBlogs,
                changePage,
                setAllTopics,
                setBestTopics,
                getMoreComments,
                getCategoryBlogs,
                closeAlertMessage,
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