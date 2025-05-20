import { FETCH_POSTS_FAILURE,FETCH_POSTS_REQUEST,FETCH_POSTS_SUCCESS,CREATE_POST_SUCCESS,UPDATE_POST_SUCCESS,DELETE_POST_SUCCESS } from '../types/types';

const initialState = {
  loading: false,
  posts: [],
  error: '',
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        // Action to fetch posts
        case FETCH_POSTS_REQUEST:
        return {
            ...state,
            loading: true,
        };
        case FETCH_POSTS_SUCCESS:
        return {
            loading: false,
            posts: action.payload,
            error: '',
        };
        case FETCH_POSTS_FAILURE:
        return {
            loading: false,
            posts: [],
            error: action.payload,
        };

        // Action to create a post
        case CREATE_POST_SUCCESS:
        return {
            ...state,
            posts: [...state.posts, action.payload],
        };
        // Action to update a post
        case UPDATE_POST_SUCCESS:
        return {
            ...state,
            posts: state.posts.map((post) =>
            post.id === action.payload.id ? action.payload : post
            ),
        };
        // Action to delete a post
        case DELETE_POST_SUCCESS:
        return {
            ...state,
            posts: state.posts.filter((post) => post.id !== action.payload),
        };
        default:
        return state;
    }
};
export default postReducer;