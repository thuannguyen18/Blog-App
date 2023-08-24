function reducer(state, action) {
    const data = action.payload;

    switch (action.type) {
        case 'SET_NAME': {
            return {
                ...state,
                username: data,
            };
        }
        case 'SET_EMAIL': {
            return {
                ...state,
                email: data,
            };
        }
        case 'SET_PASSWORD': {
            return {
                ...state,
                password: data,
            };
        }
        case "SET_USER_AVATAR": {
            return {
                ...state,
                userAvatar: data,
                isChange: true,
            }
        }
        case "SET_USER_NAME": {
            return {
                ...state,
                userNameUpdate: data,
                isChange: true,
            }
        }
        case "SET_USER_EMAIL": {
            return {
                ...state,
                userEmailUpdate: data,
                isChange: true,
            }
        }
        case "SET_DEFAULT": {
            return {
                ...state,
                userNameUpdate: state.userName,
                userEmailUpdate: state.userEmail,
                isChange: false
            }
        }
        case "SET_ALL_TOPICS":
            return {
                ...state,
                allTopics: true,
                bestTopics: false,
                currentPage: 1,
                activePage: 1,
            }
        case "SET_BEST_TOPICS":
            return {
                ...state,
                allTopics: false,
                bestTopics: true,
                currentPage: 1,
                activePage: 1,
            }
        case "SIGN_UP_SUCCESS":
            return {
                ...state,
                loading: false,
                isAlert: true,
                isFail: false,
                isSuccess: true,
                message: data,
            }
        case "SIGN_UP_FAIL":
            return {
                ...state,
                loading: false,
                isAlert: true,
                isFail: true,
                message: data,
            }
        case "SIGN_IN_SUCCESS":
            return {
                ...state,
                loading: false,
                userPassword: "",
            }
        case "SIGN_IN_FAIL":
            return {
                ...state,
                loading: false,
                isAlert: true,
                isFail: true,
                isSuccess: false,
                message: data
            }
        case "CLOSE_ALERT_MESSAGE":
            return {
                ...state,
                isAlert: false,
                isFail: false,
            }
        case "LOADING":
            return {
                ...state,
                loading: true,
            };
        case "FEED_LOADING":
            return {
                ...state,
                feedLoading: true,
            }
        case "COMMENT_LOADING":
            return {
                ...state,
                commentLoading: true,
            }
        case "UPDATE_USER_LOADING":
            return {
                ...state,
                updateUserLoading: true,
            }
        case "CHANGE_PASSWORD_LOADING":
            return {
                ...state,
                changePasswordLoading: true,
            }
        case "AUTH_SUCCESS":
            return {
                ...state,
                isAuthenticated: true,
                isAlert: false,
                isFail: false,
                isSuccess: false,
                userId: data.id,
                userName: data.username,
                userEmail: data.email,
                userProfilePicturePath: data.profilePicturePath,
                userNameUpdate: data.username,
                userEmailUpdate: data.email,
            };
        case "GET_USER_BLOGS":
            return {
                ...state,
                loading: false,
                userBlogs: data,
                toastMessage: "",
            }
        case "UPDATE_USER_SUCCESS":
            return {
                ...state,
                updateUserLoading: false,
                toastMessage: data,
                isChange: false,
            }
        case "CHANGE_PASSWORD_SUCCESS": {
            return {
                ...state,
                changePasswordLoading: false,
                toastMessage: data,
            }
        }
        case "SET_TITLE": {
            return {
                ...state,
                title: data
            }
        }
        case "SET_CONTENT": {
            return {
                ...state,
                content: data
            }
        }
        case "SET_AVATAR": {
            return {
                ...state,
                userAvatar: data
            }
        }
        case "LOG_OUT": {
            return {
                ...state,
                userId: "",
                isAuthenticated: false,
                name: "",
                email: "",
                password: "",
            };
        }
        case "GET_AUTHOR":
            return {
                ...state,
                loading: false,
                authorName: data.user.username,
                authorEmail: data.user.email,
                authorProfilePicturePath: data.user.profilePicturePath,
                authorBlogs: data.userBlog,
            };
        case "GET_ALL_BLOGS": {
            return {
                ...state,
                feedLoading: false,
                blogsPublic: data.blogs,
                totalPages: data.totalPages
            }
        }
        case "GET_TOP_BLOGS":
            return {
                ...state,
                feedLoading: false,
                topBlogs: data.blogs,
                totalPages: data.totalPages
            }
        case "GET_NEWEST_BLOGS":
            return {
                ...state,
                loading: false,
                newestBlogs: data
            }
        case "GET_RANDOM_BLOGS":
            return {
                ...state,
                loading: false,
                randomBlogs: data
            }
        case "GET_BLOGS": {
            return {
                ...state,
                loading: false,
                blogs: data
            }
        }
        case "GET_BLOG_DETAIL": {
            return {
                ...state,
                loading: false,
                authorId: data.userId._id,
                authorName: data.userId.username,
                authorEmail: data.userId.email,
                authorProfilePicturePath: data.userId.profilePicturePath,
                blogTitle: data.title,
                blogSubtitle: data.subTitle,
                blogContent: data.content,
                blogPicturePath: data.picturePath,
                blogCategory: data.category,
            }
        }
        case "GET_COMMENTS":
            if (data.length < 5) {
                if (data.length === 0) {
                    return {
                        ...state,
                        isHasComment: false,
                    };
                }
                return {
                    ...state,
                    comments: data,
                    isFinalComment: true,
                    isHasComment: true,
                }
            }
            return {
                ...state,
                comments: data,
                isFinalComment: false,
                isHasComment: true,
            }
        case "GET_MORE_COMMENTS":
            if (data.length < 5) {
                return {
                    ...state,
                    commentLoading: false,
                    isFinalComment: true,
                    comments: [...state.comments, ...data],
                    nextComments: 1,
                }
            }
            return {
                ...state,
                commentLoading: false,
                comments: [...state.comments, ...data],
            }
        case "GET_CATEGORY_BLOGS":
            return {
                ...state,
                loading: false,
                categoryBlogs: data.blogs,
                categoryCurrentPage: data.currentPage,
            }
        case "CREATED_BLOG": {
            return {
                ...state,
                loading: false,
                title: "",
                content: ""
            };
        }
        case "SET_TITLE_UPDATE": {
            return {
                ...state,
                articleTitle: data
            }
        }
        case "SET_CONTENT_UPDATE": {
            return {
                ...state,
                articleContent: data
            }
        }
        case "CHANGE_PAGE":
            return {
                ...state,
                activePage: data,
                currentPage: data
            }
        default: return new Error('Invalid action');
    }
}

export default reducer;