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
        case "AUTH_SUCCESS": {
            return {
                ...state,
                userId: action.payload,
                isAuthenticated: true,
            };
        }
        case "GET_USER":
            return {
                ...state,
                loading: false,
                authorName: action.payload.user.username,
                authorEmail: action.payload.user.email,
                authorProfilePicturePath: action.payload.user.profilePicturePath,
                authorBlogs: action.payload.userBlog,
            };
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
            return {
                ...state,
                comments: action.payload,
                isFinalComment: false,
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