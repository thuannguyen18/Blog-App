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
        case "LOG_OUT": {
            return { 
                ...state, 
                isAuthenticated: false,
                name: "",
                email: "",
                password: "",
            };
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
                article: action.payload,
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
        default: return new Error('Invalid action');
    }
}

export default reducer;