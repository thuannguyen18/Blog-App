import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import jwt from "jwt-decode";
import axios from "axios";
import axiosConfig from "config/axiosConfig";

import reducer from "./reducer";

const AppContext = createContext();

const initalState = {
    // ========== Authorization ==========
    userId: "",
    userName: "",
    userEmail: "",
    userProfilePicturePath: "",
    isAuthenticated: false,
    // ========== Authentication ==========
    username: "",
    email: "",
    password: "",
    // ========== Account Setting ==========
    isChange: false,
    userNameUpdate: "",
    userEmailUpdate: "",
    userAvatar: undefined,
    toastMessage: "",
    // =====================================
    title: "",
    content: "",
    blogsPublic: [],
    blogs: [],
    articleTitle: "",
    articleContent: "",
    userNameBlog: "",
    userIdBlog: "",
    otherUserAvatar: "",
    // ========== Author ==========
    authorId: "",
    authorName: "",
    authorEmail: "",
    authorProfilePicturePath: "",
    // ========== Blogs ==========
    userBlogs: [],
    newestBlogs: [],
    randomBlogs: [],
    authorBlogs: [],
    topBlogs: [],
    categoryBlogs: [],
    // ========== Blog Detail ==========
    blogTitle: "",
    blogSubtitle: "",
    blogContent: "",
    blogPicturePath: "",
    blogCategory: "",
    comments: [],
    // ========== Blog Detail Pagination ==========
    totalPages: "",
    currentPage: 1,
    activePage: 1,
    limitPerPage: 8,
    // ========== Blog Detail Comments Pagination ==========
    nextComments: 1,
    isFinalComment: false,
    isHasComment: false,
    // ========== Category Pagination ==========
    categoryTotalPages: "",
    categoryCurrentPage: 1,
    categoryActivePage: 1,
    // ========== Loading ==========
    loading: false,
    feedLoading: false,
    commentLoading: false,
    updateUserLoading: false,
    changePasswordLoading: false,
    // ========== Topics ==========
    allTopics: true,
    bestTopics: false,
    // ========== Alert Message ==========
    isAlert: false,
    isFail: false,
    isSuccess: false,
    message: "",
}

function AppProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initalState);
    const navigate = useNavigate();

    // @access: public --- Set values for form signup & login page
    const setName = (value) => dispatch({ type: "SET_NAME", payload: value });
    const setEmail = (value) => dispatch({ type: "SET_EMAIL", payload: value });
    const setPassword = (value) => dispatch({ type: "SET_PASSWORD", payload: value });

    // @access: private --- User Account Settings
    const setUserAvatar = (value) => dispatch({ type: "SET_USER_AVATAR", payload: value })
    const setUserName = (value) => dispatch({ type: "SET_USER_NAME", payload: value });
    const setUserEmail = (value) => dispatch({ type: "SET_USER_EMAIL", payload: value });
    const setDefault = () => dispatch({ type: "SET_DEFAULT" });

    // @access: public --- Set values to get the specific topic
    const setAllTopics = () => dispatch({ type: "SET_ALL_TOPICS" });
    const setBestTopics = () => dispatch({ type: "SET_BEST_TOPICS" });

    // @access: public --- Close alert message when submit fail on Sign in page 
    const closeAlertMessage = () => dispatch({ type: "CLOSE_ALERT_MESSAGE" });

    // @access: public --- Change page for pagination
    const changePage = (page) => dispatch({ type: "CHANGE_PAGE", payload: page });

    // @access: private --- Create a new blog by user
    const setTitle = (value) => dispatch({ type: "SET_TITLE", payload: value });
    const setContent = (value) => dispatch({ type: "SET_CONTENT", payload: value });

    const setTitleUpdate = (value) => dispatch({ type: "SET_TITLE_UPDATE", payload: value });
    const setContentUpdate = (value) => dispatch({ type: "SET_CONTENT_UPDATE", payload: value });

    // @access: public 
    const signUp = async () => {
        dispatch({ type: "LOADING" });
        try {
            const { username, email, password } = state;
            const formData = {
                username,
                email,
                password
            };
            const { data } = await axiosConfig.post("auth/register", formData);
            navigate("/login");
            dispatch({ type: "SIGN_UP_SUCCESS", payload: data.message });
        } catch (error) {
            dispatch({ type: "SIGN_UP_FAIL", payload: error.response.data.message });
        }
    }

    // @access: public
    const signIn = async () => {
        dispatch({ type: "LOADING" });
        try {
            const { email, password } = state;
            const payload = { email, password };
            const response = await axiosConfig.post("/auth/login", payload);

            const token = response.data.accessToken;

            if (token) {
                const { UserInfo } = jwt(token);

                localStorage.setItem("access_token", token);

                dispatch({ type: "AUTH_SUCCESS", payload: UserInfo });
                navigate("/");
            }

            dispatch({ type: "SIGN_IN_SUCCESS" });

        } catch (error) {
            dispatch({ type: "SIGN_IN_FAIL", payload: error.response.data.message });
        }
    }

    // @access: private
    const logout = () => {
        localStorage.clear();
        dispatch({ type: "LOG_OUT" });
    }

    // @access: public --- Get author information when user want to know who write this blog
    const getUser = async (id) => {
        dispatch({ type: "LOADING" });
        try {
            const { data } = await axios.get(`http://localhost:3500/user/${id}`);
            dispatch({ type: "GET_AUTHOR", payload: data });
        } catch (error) {
            console.log(error);
        }
    }

    // @access: private --- Update user's information
    const updateUser = async () => {
        dispatch({ type: "UPDATE_USER_LOADING" });

        try {
            const token = localStorage.getItem("access_token");
            const { UserInfo } = jwt(token);
            const { userNameUpdate, userEmailUpdate, userAvatar } = state;
            const formData = new FormData();

            formData.append("username", userNameUpdate);
            formData.append("email", userEmailUpdate);
            if (userAvatar) {
                formData.append("picture", userAvatar);
            }

            for (let key of formData.entries()) {
                console.log(key[0] + ', ' + key[1]);
            }

            const { data } = await axiosConfig.patch(`/user/${UserInfo.id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log(data)

            dispatch({ type: "UPDATE_USER_SUCCESS", payload: data });
            navigate("/user");
            toast.success("Update success");
        } catch (error) {
            console.log(error);
            dispatch({ type: "UPDATE_USER_FAIL" });
        }
    }

    // @access: private
    const changePassword = async (payload) => {
        dispatch({ type: "CHANGE_PASSWORD_LOADING" });
        try {
            const token = localStorage.getItem("access_token");
            const { UserInfo } = jwt(token);

            const { data } = await axiosConfig
                .patch(`/user/${UserInfo.id}/change-password`, payload, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            dispatch({ type: "CHANGE_PASSWORD_SUCCESS", payload: data });
            toast.success("Change password success");
        } catch (error) {
            console.log(error);
        }
    }

    // @access: private --- Get all blogs belong to user who has authorized
    const getUserBlog = async (id) => {
        dispatch({ type: "LOADING" });

        try {
            const token = localStorage.getItem("access_token");

            const { data } = await axiosConfig.get(`/user/${id}/user-blog`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            dispatch({ type: "GET_USER_BLOGS", payload: data });
        } catch (error) {
            console.log(error);
        }
    }

    // @access: public
    const getAllBlogs = async () => {
        dispatch({ type: "FEED_LOADING" });
        try {
            const { data } = await axiosConfig
                .get(`/blog?page=${state.currentPage}&limit=${state.limitPerPage}`);
            dispatch({ type: "GET_ALL_BLOGS", payload: data });
        } catch (error) {
            console.log(error);
            dispatch({ type: "SUBMITTED" });
        }
    }

    // @access: public --- Get all blogs which have the most like
    const getTopBlogs = async () => {
        dispatch({ type: "FEED_LOADING" });
        try {
            const { data } = await axiosConfig
                .get(`/blog?sort=top&page=${state.currentPage}&limit=${state.limitPerPage}`);
            dispatch({ type: "GET_TOP_BLOGS", payload: data });
        } catch (error) {

        }
    }

    // @access: public
    const getBlogs = async (dispatchType, queryType) => {
        dispatch({ type: "LOADING" });
        try {
            const { data } = await axiosConfig.get(`/blog?${queryType}=true&limit=4`);
            dispatch({ type: dispatchType, payload: data });
        } catch (error) {
            console.log(error);
            dispatch({ type: "SUBMITTED" });
        }
    }

    // @access: public
    const getBlog = async (id) => {
        dispatch({ type: "LOADING" });
        try {
            const response = await Promise.all([
                axiosConfig.get(`/blog/${id}`),
                axiosConfig.get(`/blog/${id}/comments?page=1&limit=5`)
            ]);
            dispatch({ type: "GET_BLOG_DETAIL", payload: response[0].data });
            console.log(response[0].data);
            dispatch({ type: "GET_COMMENTS", payload: response[1].data });
        } catch (error) {
            console.log(error);
        }
    }

    // @access: public
    const getMoreComments = async (id) => {
        dispatch({ type: "COMMENT_LOADING" });
        try {
            const { data } = await axiosConfig
                .get(`/blog/${id}/comments?page=${state.nextComments += 1}&limit=5`);
            dispatch({ type: "GET_MORE_COMMENTS", payload: data })
        } catch (error) {
            console.log(error);
        }
    }

    // @access: public
    const getCategoryBlogs = async (category) => {
        dispatch({ type: "LOADING" });
        try {
            const { data } = await axiosConfig
                .get(`/blog/category?name=${category}&page=${state.categoryCurrentPage}`)
            dispatch({ type: "GET_CATEGORY_BLOGS", payload: data });
        } catch (error) {
            console.log(error);
        }
    }

     // @access: private --- Create a new blog by user
    const createBlog = async (blogInfo) => {
        dispatch({ type: "LOADING" });
        try {
            const token = localStorage.getItem("access_token");
            const { UserInfo } = jwt(token);
            const { title, subTitle, content, category, thumbnail} = blogInfo;
            const formData = new FormData();

            formData.append("userId", UserInfo.id)
            formData.append("title", title);
            formData.append("subTitle", subTitle);
            formData.append("content", JSON.stringify(content));
            formData.append("category", category);
            if (thumbnail) {
                formData.append("picture", thumbnail);
            }

            for (let key of formData.entries()) {
                console.log(key[0] + ', ' + key[1]);
            }

            const { data } = await axiosConfig.post("/blog", formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            console.log(data);
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
                signUp,
                signIn,
                logout,
                setUserAvatar,
                setUserName,
                setUserEmail,
                setDefault,
                getUser,
                updateUser,
                changePassword,
                setTitle,
                setContent,
                getUserBlog,
                getAllBlogs,
                getBlog,
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