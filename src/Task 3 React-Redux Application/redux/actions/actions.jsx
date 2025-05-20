import axios from 'axios';
import { FETCH_POSTS_FAILURE,FETCH_POSTS_REQUEST,FETCH_POSTS_SUCCESS,CREATE_POST_SUCCESS,UPDATE_POST_SUCCESS,DELETE_POST_SUCCESS } from '../types/types';
import  config  from '../../config/config';

// Action to fetch posts
export const fetchPostsRequest = () => async (dispatch) => {
  dispatch({ type: FETCH_POSTS_REQUEST });
  try {
    const response = await axios.get(config.API_ENDPOINT);
    dispatch({ type: FETCH_POSTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_POSTS_FAILURE, payload: error.message });
  }
}
// Action to create a post
export const createPost = (post) => async (dispatch) => {
  try {
    const response = await axios.post(config.API_ENDPOINT, post);
    dispatch({ type: CREATE_POST_SUCCESS, payload: response.data });
  } catch (error) {
    console.error("Error creating post:", error);
  }
}
// Action to update a post
export const updatePost = (post) => async (dispatch) => {
  try {
    const response = await axios.put(`${config.API_ENDPOINT}/${post.id}`, post);
    dispatch({ type: UPDATE_POST_SUCCESS, payload: response.data });
  } catch (error) {
    console.error("Error updating post:", error);
  }
}
// Action to delete a post 
export const deletePost = (postId) => async (dispatch) => {
  try {
    await axios.delete(`${config.API_ENDPOINT}/${postId}`);
    dispatch({ type: DELETE_POST_SUCCESS, payload: postId });
  } catch (error) {
    console.error("Error deleting post:", error);
  }
}