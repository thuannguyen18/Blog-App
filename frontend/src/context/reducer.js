function reducer(state, action) {
    const data = action.payload;

    switch (action.type) {
        case "SET_NAME":
            return { ...state, username: data };
        case "SET_EMAIL":
            return { ...state, email: data };
        case "SET_PASSWORD":
            return { ...state, password: data };
        case "SIGN_UP_SUCCESS":
            return {
                ...state,
                loading: false,
                isAlert: true,
                message: data,
                isSuccess: true,
            }
        case "SIGN_UP_FAIL":
            return {
                ...state,
                loading: false,
                isAlert: true,
                message: data,
            }
        case "SIGN_IN_SUCCESS":
            return {
                ...state,
                loading: false,
                isAlert: false,
                isSuccess: false,
            };
        case "SIGN_IN_FAIL":
            return {
                ...state,
                loading: false,
                isAlert: true,
                message: data,
                isSuccess: false
            };
        case "LOG_OUT":
            return {
                ...state,
                name: "",
                email: "",
                password: "",
                isSuccess: false,
            };
        case "CLOSE_ALERT_MESSAGE":
            return {
                ...state,
                isAlert: false,
            }
        case "GET_NEWEST_BLOGS":
            return {
                ...state,
                loading: false,
                latestBlogs: data
            }
        case "GET_RANDOM_BLOGS":
            return {
                ...state,
                loading: false,
                randomBlogs: data
            }
        case "SET_ALL_TOPICS":
            return {
                ...state,
                isAllTopics: true,
                isBestTopics: false,
                isAuthorTopics: false,
                currentPage: 1,
                activePage: 1,
            }
        case "GET_ALL_BLOGS":
            return {
                ...state,
                feedLoading: false,
                allBlogs: data.blogs,
                totalPages: data.totalPages,
                savesAndLikes: data.isSavedAndLiked
            }
        case "SET_BEST_TOPICS":
            return {
                ...state,
                isAllTopics: false,
                isBestTopics: true,
                isAuthorTopics: false,
                currentPage: 1,
                activePage: 1,
            }
        case "GET_TOP_BLOGS":
            return {
                ...state,
                feedLoading: false,
                topBlogs: data.blogs,
                totalPages: data.totalPages
            }
        case "SET_AUTHOR_TOPICS":
            return {
                ...state,
                isAllTopics: false,
                isBestTopics: false,
                isAuthorTopics: true,
                currentPage: 1,
                activePage: 1,
            }
        case "GET_FOLLOWING_AUTHOR_BLOGS":
            return {
                ...state,
                feedLoading: false,
                followingBlogs: data.blogs,
                totalPages: data.totalPages
            }
        case "GET_BLOG_DETAIL": {
            return {
                ...state,
                loading: false,
                authorId: data.userId._id,
                authorName: data.userId.username,
                authorEmail: data.userId.email,
                authorProfilePicturePath: data.userId.profilePicturePath,
                blogId: data._id,
                blogTitle: data.title,
                blogSubtitle: data.subTitle,
                blogContent: data.content,
                blogPicturePath: data.picturePath,
                blogCategory: data.category,
                blogIdUpdate: data._id,
                blogTitleUpdate: data.title,
                blogSubtitleUpdate: data.subTitle,
                blogContentUpdate: data.draftContents,
                blogCategoryUpdate: data.category,
                blogPicturePathUpdate: data.picturePath,
                blogCreatedAt: data.createdAt,
            }
        }
        case "GET_COMMENTS":
            if (data.length <= 4) {
                if (data.length < 1) {
                    return {
                        ...state,
                        comments: [],
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
                    userIdComment: data.id ?? 0,
                    nextComments: 1,
                }
            }
            return {
                ...state,
                commentLoading: false,
                comments: [...state.comments, ...data],
                userIdComment: data.id ?? 0,
            }
        case "GET_CATEGORY_BLOGS":
            return {
                ...state,
                loading: false,
                categoryBlogs: data.blogs,
                categoryCurrentPage: data.currentPage,
            }
        case "GET_AUTHOR":
            return {
                ...state,
                loading: false,
                authorName: data.author.username,
                authorEmail: data.author.email,
                authorProfilePicturePath: data.author.profilePicturePath,
                authorBlogs: data.authorBlogs,
                authorFollowers: data.author.followers,
                authorFollowing: data.author.following,
                isFollowing: data.isFollowing
            };
        case "GET_USER":
            return {
                ...state,
                userBlogsLoading: false,
                userBlogs: data.userBlogs,
                userFollowersCount: data.followers,
                userFollowingCount: data.following
            }
        case "UPDATE_USER_SUCCESS":
            return {
                ...state,
                updateUserLoading: false,
                isChange: false,
            }
        case "CHANGE_PASSWORD_SUCCESS": {
            return {
                ...state,
                changePasswordLoading: false,
            }
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
        case "CREATE_BLOG_SUCCESS":
            return {
                ...state,
                loading: false,
                blogIdUpdate: data.blogCreated._id,
                blogTitleUpdate: data.blogCreated.title,
                blogSubtitleUpdate: data.blogCreated.subTitle,
                blogContentUpdate: data.blogCreated.draftContents,
                blogCategoryUpdate: data.blogCreated.category,
                blogPicturePathUpdate: data.blogCreated.picturePath,
            }
        case "UPDATE_BLOG_SUCCESS":
            return {
                ...state,
                loading: false,
                blogIdUpdate: data._id,
                blogTitleUpdate: data.title,
                blogSubtitleUpdate: data.subTitle,
                blogContentUpdate: data.draftContents,
                blogCategoryUpdate: data.category,
                blogPicturePathUpdate: data.picturePath,
            }
        case "GET_SAVED_BLOGS":
            return {
                ...state,
                savedBlogsLoading: false,
                savedBlogs: data
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
        case "POST_COMMENT_LOADING":
            return {
                ...state,
                postCommentLoading: true,
            }
        case "DELETE_COMMENT_LOADING":
            return {
                ...state,
                deleteCommentLoading: true,
            }
        case "SAVED_BLOG_LOADING":
            return {
                ...state,
                savedBlogsLoading: true,
            }
        case "UNSAVE_BLOG_SUCCESS":
            return {
                ...state,
                savedBlogs: data
            }
        case "USER_BLOGS_LOADING":
            return {
                ...state,
                userBlogsLoading: true
            }
        case "POST_COMMENT_SUCCESS":
            return {
                ...state,
                postCommentLoading: false,
                isNewComment: true,
            }
        case "DELETE_COMMENT_SUCCESS":
            return {
                ...state,
                deleteCommentLoading: false
            }
        case "CHANGE_PAGE":
            return {
                ...state,
                activePage: data,
                currentPage: data
            }
        case "OPEN_EDITOR_MODE":
            return {
                ...state,
                editorMode: true,
            }
        case "CLOSE_EDITOR_MODE":
            return {
                ...state,
                editorMode: false,
            }
        case "GET_USER_STATS":
            return {
                ...state,
                userFollowersCount: data.followers,
                userFollowingCount: data.following,
            }
        case "FOLLOW":
            return {
                ...state,
                authorFollowersCount: data.authorFollowerCount,
                userFollowingCount: data.userFollowingCount,
            }
        case "SAVE_DRAFT_LOADING":
            return {
                ...state,
                saveDraftLoading: true,
            }
        case "SAVE_DRAFT_SUCCESS":
            return {
                ...state,
                saveDraftLoading: false,
            }
        case "GET_ALL_DRAFT":
            return {
                ...state,
                drafts: data
            }
        case "DELETE_DRAFT_SUCCESS":
            return {
                ...state,
                drafts: data
            }
        case "DRAFT_UPDATE":
            return {
                ...state,
                draftUpdate: data
            }
        case "GET_SEARCH_RESULTS":
            return {
                ...state,
                results: data.result,
                titleSearch: data.title
            }
        case "GET_USER_SEARCH_RESULTS":
            return {
                ...state,
                userResults: data.result,
                titleSearch: data.title
            }
        case "SEARCH_QUERY":
            return {
                ...state,
                query: data,
            }
        default: return new Error('Invalid action');
    }
}

export default reducer;