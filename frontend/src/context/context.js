import { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import jwt from "jwt-decode";
import axiosConfig from "config/axiosConfig";
import reducer from "./reducer";
import { token, userInformation } from "constants";

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
    latestBlogs: [],
    randomBlogs: [],
    allBlogs: [],
    topBlogs: [],
    followingBlogs: [],
    savesAndLikes: [],
    isAllTopics: true,
    isBestTopics: false,
    isAuthorTopics: false,
    // Blog pagination 
    totalPages: 0,
    currentPage: 1,
    activePage: 1,
    limitPerPage: 10,
    // Get blog detail 
    blogId: "",
    blogTitle: "",
    blogSubtitle: "",
    blogContent: "",
    blogPicturePath: "",
    blogCategory: "",
    blogCreatedAt: "",
    // Get comments and pagination
    comments: [],
    nextComments: 1,
    isFinalComment: false,
    isHasComment: false,
    isNewComment: false,
    // Get blogs that have same category and pagination
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
    authorFollowers: [],
    authorFollowing: [],
    isFollowing: false,
    // Authorization 
    userBlogs: [],
    savedBlogs: [],
    userName: "",
    userEmail: "",
    // Account Setting
    isChange: false,
    userNameUpdate: "",
    userEmailUpdate: "",
    userAvatar: null,
    // Blog Update
    blogIdUpdate: "",
    blogTitleUpdate: "",
    blogSubtitleUpdate: "",
    blogContentUpdate: [],
    blogPicturePathUpdate: "",
    blogCategoryUpdate: "",
    // Reaction
    isActive: false,
    // Loading
    loading: false,
    feedLoading: false,
    commentLoading: false,
    updateUserLoading: false,
    changePasswordLoading: false,
    postCommentLoading: false,
    deleteCommentLoading: false,
    savedBlogsLoading: false,
    userBlogsLoading: false,
    saveDraftLoading: false,
    // Editor mode
    editorMode: false,
    // Follow
    authorFollowersCount: 0,
    authorFollowingCount: 0,
    userFollowersCount: 0,
    userFollowingCount: 0,
    isFollow: false,
    // Draft
    drafts: [],
    draftUpdate: null,
    // Search Result
    query: "",
    results: [],
    userResults: [],
    titleSearch: "",
}

function AppProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initalState);
    const navigate = useNavigate();

    // Set search query
    const setQuery = (data) => {
        dispatch({ type: "SEARCH_QUERY", payload: data });
    }

    // Set editor mode
    const openEditorMode = () => dispatch({ type: "OPEN_EDITOR_MODE" });
    const closeEditorMode = () => dispatch({ type: "CLOSE_EDITOR_MODE" });

    // Set draft update
    const setDraftUpdate = (data) => dispatch({ type: "DRAFT_UPDATE", payload: data });

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
            const response = await axiosConfig.post("/api/v1/auth/register", payload)
            
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
            const response = await axiosConfig.post("/api/v1/auth/login", payload);
            const token = response.data.accessToken;

            if (token) {
                const { UserInfo } = jwt(token);
                const userInformation = JSON.stringify(UserInfo);

                localStorage.setItem("access_token", token);
                localStorage.setItem("user_information", userInformation);
            }

            dispatch({ type: "SIGN_IN_SUCCESS" });
            navigate("/");
            window.location.reload();
        } catch (error) {
            const message = error.response.data.message
            dispatch({ type: "SIGN_IN_FAIL", payload: message });
        }
    }

    // Logout user
    const logout = () => {
        localStorage.clear();
        dispatch({ type: "LOG_OUT" });
        navigate("/");
        window.location.reload();
    }

    // Close alert message when submit fail on Sign in page 
    const closeAlertMessage = () => dispatch({ type: "CLOSE_ALERT_MESSAGE" });

    // Get random  & newest blog
    const getBlogs = async (dispatchType, queryType) => {
        dispatch({ type: "LOADING" });
        try {
            const response = await axiosConfig.get(`/api/v1/blog?${queryType}=true&limit=4`);

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
            if (userInformation?.id) {
                const response = await axiosConfig
                    .get(`/api/v1/blog?page=${state.currentPage}&limit=${state.limitPerPage}&userId=${userInformation.id}`);

                dispatch({
                    type: "GET_ALL_BLOGS",
                    payload: response.data
                });
                return;
            }

            const response = await axiosConfig
                .get(`/api/v1/blog?page=${state.currentPage}&limit=${state.limitPerPage}`);

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
            if (userInformation?.id) {
                const response = await axiosConfig
                    .get(`/api/v1/blog?sort=top&page=${state.currentPage}&limit=${state.limitPerPage}&userId=${userInformation?.id}`);

                dispatch({
                    type: "GET_TOP_BLOGS",
                    payload: response.data
                });
                return;
            }
            const response = await axiosConfig
                .get(`/api/v1/blog?sort=top&page=${state.currentPage}&limit=${state.limitPerPage}`);

            dispatch({
                type: "GET_TOP_BLOGS",
                payload: response.data
            });
        } catch (error) {
            console.log(error);
        }
    }

    const getAuthorBlogs = async () => {
        dispatch({ type: "FEED_LOADING" });
        try {
            const response = await axiosConfig
                .get(`/api/v1/blog/author-following?page=${state.currentPage}&limit=${state.limitPerPage}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            dispatch({
                type: "GET_FOLLOWING_AUTHOR_BLOGS",
                payload: response.data
            });
        } catch (error) {
            console.log(error);
        }
    }

    // Set values to get the specific topic
    const setAllTopics = () => dispatch({ type: "SET_ALL_TOPICS" });
    const setBestTopics = () => dispatch({ type: "SET_BEST_TOPICS" });
    const setAuthorTopics = () => dispatch({ type: "SET_AUTHOR_TOPICS" });

    // Pagination in home page
    const changePage = (page) => dispatch({
        type: "CHANGE_PAGE",
        payload: page
    });

    // Get blog detail and comments belong to that blog
    const getBlogDetail = async (blogId) => {
        dispatch({ type: "LOADING" });

        try {
            const response = await Promise.all([
                axiosConfig.get(`/api/v1/blog/${blogId}`),
                axiosConfig.get(`/api/v1/blog-detail/${blogId}/comments?page=1&limit=5`)
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
                .get(`/api/v1/blog-detail/${id}/comments?page=${state.nextComments += 1}&limit=5`);

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
                .get(`/api/v1/blog/category?name=${category}&page=${state.categoryCurrentPage}`);
            dispatch({
                type: "GET_CATEGORY_BLOGS",
                payload: response.data
            });
        } catch (error) {
            console.log(error);
        }
    }

    // Get author's information 
    const getAuthor = async (authorId) => {
        dispatch({ type: "LOADING" });
        try {
            if (userInformation?.id) {
                const response = await axiosConfig.get(`/api/v1/user/${authorId}?userId=${userInformation.id}`);
                dispatch({
                    type: "GET_AUTHOR",
                    payload: response.data
                });
                return;
            }
            const response = await axiosConfig.get(`/api/v1/user/${authorId}`);
            dispatch({
                type: "GET_AUTHOR",
                payload: response.data
            });
        } catch (error) {
            console.log(error);
        }
    }

    // Get user's blogs who has authorized
    const getUser = async () => {
        dispatch({ type: "USER_BLOGS_LOADING" });

        try {
            const { data } = await axiosConfig.get("/api/v1/user", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            dispatch({ type: "GET_USER", payload: data });

        } catch (error) {
            console.log(error);
        }
    }

    // Update user's information
    const updateUser = async (userUpdateInfo) => {
        const {
            userAvatarUpdate,
            userNameUpdate,
            userEmailUpdate
        } = userUpdateInfo;

        const formData = new FormData();
        formData.append("username", userNameUpdate);
        formData.append("email", userEmailUpdate);

        if (userAvatarUpdate) {
            formData.append("picture", userAvatarUpdate);
        } else {
            formData.append("picture", null);
        }

        userInformation.username = userNameUpdate;
        userInformation.email = userEmailUpdate;
        localStorage.setItem("user_information", JSON.stringify(userInformation));

        dispatch({ type: "UPDATE_USER_LOADING" });

        try {
            const response = await axiosConfig.patch(
                `/api/v1/user/${userInformation.id}`,
                formData,
                { headers: { Authorization: `Bearer ${token}` } }
            );

            dispatch({
                type: "UPDATE_USER_SUCCESS",
                payload: response.data
            });

            navigate("/user/me");
            toast.success("Update success");
        } catch (error) {
            toast.error("Something went wrong");
            dispatch({ type: "UPDATE_USER_FAIL" });
        }
    }

    // Change password in user settings
    const changePassword = async (payload) => {
        dispatch({ type: "CHANGE_PASSWORD_LOADING" });
        const token = localStorage.getItem("access_token");
        const userInformation = JSON.parse(localStorage.getItem("user_information"));

        try {
            const response = await axiosConfig
                .patch(`/api/v1/user/${userInformation.id}/change-password`, payload, {
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
        const formData = new FormData();
        formData.append("userId", userInformation?.id);
        formData.append("title", blogInfo.title);
        formData.append("subTitle", blogInfo.subTitle);
        formData.append("content", JSON.stringify(blogInfo.content));
        formData.append("category", blogInfo.category);

        if (blogInfo.thumbnail) {
            formData.append("picture", blogInfo.thumbnail);
        } else {
            formData.append("picture", null);
        }

        try {
            const response = await axiosConfig.post("/api/v1/blog", formData, {
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
            await axiosConfig.delete(`/api/v1/blog/${id}`, {
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

    // Update blog by user
    const updateBlog = async (blogInfo) => {
        dispatch({ type: "LOADING" });

        const formData = new FormData();
        formData.append("userId", userInformation?.id);
        // formData.append("blogId", blogInfo.id)
        formData.append("title", blogInfo.title);
        formData.append("subTitle", blogInfo.subTitle);
        formData.append("content", JSON.stringify(blogInfo.content));
        formData.append("category", blogInfo.category);

        if (blogInfo.thumbnail) {
            formData.append("picture", blogInfo.thumbnail);
        } else {
            formData.append("picture", null);
        }

        try {
            const response = await axiosConfig.patch(`/api/v1/blog/${blogInfo.id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            dispatch({
                type: "UPDATE_BLOG_SUCCESS",
                payload: response.data.blogUpdated
            });

            navigate(`/blog/${response.data.blogUpdated._id}`);
            toast.success("Update post success");
        } catch (error) {
            console.log(error);
            toast.error("Update post fail");
        }
    }

    // Get comments belong to a blog
    const getComments = async (blogId) => {
        let limit = 5;
        if (state.isNewComment) {
            limit = 6;
        }

        try {
            const response = await axiosConfig.get(`/api/v1/blog-detail/${blogId}/comments?page=1&limit=${limit}`);
            dispatch({
                type: "GET_COMMENTS",
                payload: response.data
            });
        } catch (error) {
            console.log(error);
        }
    }

    // User comments in a blog
    const postComment = async (blogId, content) => {
        const token = localStorage.getItem("access_token");
        const userInformation = JSON.parse(localStorage.getItem("user_information"));

        if (!token) {
            navigate("/login");
            return;
        }

        dispatch({ type: "POST_COMMENT_LOADING" });

        const payload = {
            userId: userInformation.id,
            blogId,
            content
        };

        try {
            await axiosConfig.post(`/api/v1/blog-detail/create-comment`, payload, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            dispatch({ type: "POST_COMMENT_SUCCESS" });
            toast.success("Post comment success");
        } catch (error) {
            console.log(error);
            dispatch({ type: "POST_COMMENT_FAIL" });
            toast.error("Something went wrong");
        }
    }

    // User delete comment in a blog
    const deleteComment = async (id, blogId) => {
        dispatch({ type: "DELETE_COMMENT_LOADING" });
        const token = localStorage.getItem("access_token");
        try {
            await axiosConfig.delete(`/api/v1/blog-detail/delete-comment/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            getComments(blogId);
            dispatch({ type: "DELETE_COMMENT_SUCCESS" });
            toast.success("Your comment has been deleted");
        } catch (error) {
            console.log(error);
            dispatch({ type: "DELETE_COMMENT_FAIL" });
            toast.error("Something went wrong");
        }
    }

    // User update comment in a blog
    const updateComment = async (id, content) => {
        try {
            await axiosConfig.patch(`/api/v1/blog-detail/update-comment/${id}`, { content }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    }

    // User save a blog
    const saveBlog = async (blogId, authorId, saveId) => {
        const payload = {
            userId: userInformation.id,
            blogId,
            authorId,
            saveId
        };

        try {
            const response = await axiosConfig.post("/api/v1/save-blog", payload, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.data === "Created") {
                toast.success("Save success");
            }

            if (response.data === "OK") {
                const response = await axiosConfig
                    .get(`/api/v1/save-blog?userId=${userInformation.id}`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });

                dispatch({
                    type: "UNSAVE_BLOG_SUCCESS",
                    payload: response.data
                });
                toast.success("Unsave success");
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    }

    // Get blogs which saved by user
    const getSavedBlogs = async () => {
        dispatch({ type: "SAVED_BLOG_LOADING" });
        try {
            const response = await axiosConfig
                .get(`/api/v1/save-blog?userId=${userInformation.id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            dispatch({
                type: "GET_SAVED_BLOGS",
                payload: response.data
            });
        } catch (error) {
            console.log(error);
        }
    }

    const follow = async (id) => {
        try {
            const response = await axiosConfig.post(`/api/v1/user/${id}/follow`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            dispatch({ type: "FOLLOW", payload: response.data });
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    }

    const likeBlog = async (blogId) => {
        try {
            await axiosConfig.post(`/api/v1/blog/${blogId}/like`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    const saveDraft = async (draftInfo) => {
        dispatch({ type: "SAVE_DRAFT_LOADING" });

        const draft = {
            title: draftInfo.title,
            content: JSON.stringify(draftInfo.content),
        };

        try {
            await axiosConfig.post("/api/v1/draft", draft, {
                headers: { Authorization: `Bearer ${token}` }
            });

            dispatch({ type: "SAVE_DRAFT_SUCCESS" });
            toast.success("Save draft success");
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    }

    const getAllDrafts = async () => {
        try {
            const response = await axiosConfig.get("/api/v1/draft", {
                headers: { Authorization: `Bearer ${token}` }
            });
            dispatch({ type: "GET_ALL_DRAFT", payload: response.data });
        } catch (error) {
            console.log(error);
        }
    }

    const deleteDraft = async (id) => {
        try {
            const response = await axiosConfig.delete(`/api/v1/draft/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            dispatch({ type: "DELETE_DRAFT_SUCCESS", payload: response.data });
        } catch (error) {
            console.log(error);
        }
    }

    const getResults = async (query, type = "posts") => {
        try {
            const response = await axiosConfig
                .get(`/api/v1/blog/search?q=${query}&type=${type}&page=${1}`);

            if (type === "author") {
                dispatch({
                    type: "GET_USER_SEARCH_RESULTS",
                    payload: {
                        result: response.data.users,
                        title: query
                    }
                });
                return;
            }

            if (type === "category") {
                dispatch({
                    type: "GET_SEARCH_RESULTS",
                    payload: {
                        result: response.data.categories,
                        title: query
                    }
                });
                return;
            }

            dispatch({
                type: "GET_SEARCH_RESULTS",
                payload: {
                    result: response.data.blogs,
                    title: query
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AppContext.Provider
            value={{
                ...state,
                openEditorMode,
                closeEditorMode,
                setName,
                setEmail,
                setPassword,
                signUp,
                signIn,
                logout,
                getAuthor,
                updateUser,
                changePassword,
                getUser,
                getAllBlogs,
                getBlogDetail,
                createBlog,
                updateBlog,
                deleteBlog,
                getBlogs,
                getTopBlogs,
                getAuthorBlogs,
                changePage,
                setAllTopics,
                setBestTopics,
                setAuthorTopics,
                getMoreComments,
                getCategoryBlogs,
                closeAlertMessage,
                getComments,
                postComment,
                deleteComment,
                updateComment,
                saveBlog,
                getSavedBlogs,
                follow,
                likeBlog,
                saveDraft,
                getAllDrafts,
                deleteDraft,
                setDraftUpdate,
                getResults,
                setQuery
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

// custom hook
export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {
    AppContext,
    AppProvider
}