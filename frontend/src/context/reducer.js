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
                username: action.payload
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
                username: action.payload.username, 
                userEmail: action.payload.email, 
            };
        }
        case "UPDATE_USER": {
            return {
                ...state,
                loading: false,
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
        default: return new Error('Invalid action');
    }
}

export default reducer;