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
        case "SET_USER_NAME": {
            return {
                ...state,
                userName: action.payload
            }
        }
        case "SET_USER_EMAIL": {
            return {
                ...state,
                userEmail: action.payload
            }
        }
        case "SET_USER_PASSWORD": {
            return {
                ...state,
                userPassword: action.payload
            }
        }
        case 'SUBMITTED': {
            return {
                ...state,
                loading: false,
                userPassword: "",
            };
        }
        case 'LOADING': {
            return {
                ...state,
                loading: true,
            };
        }
        case "AUTH_SUCCESS": {
            return {
                ...state,
                userId: action.payload,
                isAuthenticated: true,
            };
        }
        case "GET_USER": {
            return {
                ...state,
                userName: action.payload.username,
                userEmail: action.payload.email,
                userAvatar: action.payload.profilePictureURL
            };
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
        case "GET_USER_BLOGS": {
            return {
                ...state,
                loading: false,
                userBlogs: action.payload,
            }
        }
        case "GET_BLOGS_PUBLIC": {
            return {
                ...state,
                loading: false,
                blogsPublic: action.payload
            }
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
                articleTitle: action.payload.title,
                articleContent: action.payload.content,
                userNameBlog: action.payload.otherUserName,
                userIdBlog: action.payload.otherUserId,
                otherUserAvatar: action.payload.otherUserAvatar
            }
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
        default: return new Error('Invalid action');
    }
}

export default reducer;