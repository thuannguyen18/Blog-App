function reducer(state, action) {
    switch (action.type) {
        case 'SET_NAME': {
            return {
                ...state,
                name: action.payload,
            };
        }
        case 'SET_EMAIL': {
            return {
                ...state,
                email: action.payload,
            };
        }
        case 'SET_PASSWORD': {
            return {
                ...state,
                password: action.payload,
            };
        }
        case "SET_USER_AVATAR": {
            return {
                ...state,
                userAvatar: action.payload,
                isChange: true,
            }
        }
        case "SET_USER_NAME": {
            return {
                ...state,
                userNameUpdate: action.payload,
                isChange: true,
            }
        }
        case "SET_USER_EMAIL": {
            return {
                ...state,
                userEmailUpdate: action.payload,
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
        case "SET_USER_PASSWORD": {
            return {
                ...state,
                userPassword: action.payload
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
                message: action.payload,
            }
        case "SIGN_UP_FAIL":
            return {
                ...state,
                loading: false,
                isAlert: true,
                isFail: true,
                message: action.payload,
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
                message: action.payload
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
                userId: action.payload.id,
                userName: action.payload.username,
                userEmail: action.payload.email,
                userProfilePicturePath: action.payload.profilePicturePath,
                isAuthenticated: true,
                userNameUpdate: action.payload.username,
                userEmailUpdate: action.payload.email,
            };
        case "GET_AUTHOR":
            return {
                ...state,
                loading: false,
                authorName: action.payload.user.username,
                authorEmail: action.payload.user.email,
                authorProfilePicturePath: action.payload.user.profilePicturePath,
                authorBlogs: action.payload.userBlog,
            };
        case "GET_USER_BLOGS":
            return {
                ...state,
                loading: false,
                userBlogs: action.payload,
                toastMessage: "",
            }
        case "UPDATE_USER_SUCCESS":
            return {
                ...state,
                updateUserLoading: false,
                toastMessage: action.payload,
                isChange: false,
            }
        case "CHANGE_PASSWORD_SUCCESS": {
            return {
                ...state,
                changePasswordLoading: false,
                toastMessage: action.payload,
            }
        }
        case "SET_TITLE": {
            return {
                ...state,
                title: action.payload
            }
        }
        case "SET_CONTENT": {
            return {
                ...state,
                content: action.payload
            }
        }
        case "SET_AVATAR": {
            return {
                ...state,
                userAvatar: action.payload
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

        case "GET_ALL_BLOGS": {
            return {
                ...state,
                feedLoading: false,
                blogsPublic: action.payload.blogs,
                totalPages: action.payload.totalPages
            }
        }
        case "GET_TOP_BLOGS":
            return {
                ...state,
                feedLoading: false,
                topBlogs: action.payload.blogs,
                totalPages: action.payload.totalPages
            }
        case "GET_NEWEST_BLOGS":
            return {
                ...state,
                loading: false,
                newestBlogs: action.payload
            }
        case "GET_RANDOM_BLOGS":
            return {
                ...state,
                loading: false,
                randomBlogs: action.payload
            }
        case "GET_BLOGS": {
            return {
                ...state,
                loading: false,
                blogs: action.payload
            }
        }
        case "GET_BLOG_DETAIL": {
            return {
                ...state,
                loading: false,
                authorId: action.payload.userId._id,
                authorName: action.payload.userId.username,
                authorEmail: action.payload.userId.email,
                authorProfilePicturePath: action.payload.userId.profilePicturePath,
                blogTitle: action.payload.title,
                blogSubtitle: action.payload.subTitle,
                blogContent: action.payload.content,
                blogPicturePath: action.payload.picturePath,
                blogCategory: action.payload.category,
            }
        }
        case "GET_COMMENTS":
            if (action.payload.length < 5) {
                if (action.payload.length === 0) {
                    return {
                        ...state,
                        isHasComment: false,
                    };
                }
                return {
                    ...state,
                    comments: action.payload,
                    isFinalComment: true,
                    isHasComment: true,
                }
            }
            return {
                ...state,
                comments: action.payload,
                isFinalComment: false,
                isHasComment: true,
            }
        case "GET_MORE_COMMENTS":
            if (action.payload.length < 5) {
                return {
                    ...state,
                    commentLoading: false,
                    isFinalComment: true,
                    comments: [...state.comments, ...action.payload],
                    nextComments: 1,
                }
            }
            return {
                ...state,
                commentLoading: false,
                comments: [...state.comments, ...action.payload],
            }
        case "GET_CATEGORY_BLOGS":
            return {
                ...state,
                loading: false,
                categoryBlogs: action.payload.blogs,
                categoryCurrentPage: action.payload.currentPage,
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
                articleTitle: action.payload
            }
        }
        case "SET_CONTENT_UPDATE": {
            return {
                ...state,
                articleContent: action.payload
            }
        }
        case "CHANGE_PAGE":
            return {
                ...state,
                activePage: action.payload,
                currentPage: action.payload
            }
        default: return new Error('Invalid action');
    }
}

export default reducer;