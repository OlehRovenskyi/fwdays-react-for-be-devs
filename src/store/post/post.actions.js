import {getPostsAsync} from "../../components/008_PostRedux/PostAsyncApi.js";
import {createPostAsync, deletePostAsync, updatePostAsync} from "../../components/006_PostAsync/PostAsyncApi.js";

export const CREATE_POST = '[Post] create Post';
export const INIT_POSTS = '[Post] init Posts';
export const DELETE_POST = '[Post] delete Post';
export const UPDATE_POST = '[Post] update Post';

export function createPostAction(payload) {
  return {
    type: CREATE_POST,
    payload,
  }
}

export function initPostsAction(payload) {
  return {
    type: INIT_POSTS,
    payload,
  }
}

export function deletePostAction(id) {
  return {
    type: DELETE_POST,
    payload: id,
  }
}

export function updatePostAction(post) {
  return {
    type: UPDATE_POST,
    payload: post,
  }
}

export function fetchPostsAction() {
  return async function(dispatch) {
    try {
      const posts = await getPostsAsync();
      dispatch(initPostsAction(posts));
    } catch (e) {

      throw new Error(e.message);
    }
  }
}

export function createPostRequestAction(post) {
  return async function(dispatch) {
    try {
      const PostInfo = await createPostAsync(post);
      dispatch(createPostAction(PostInfo));
    } catch (e) {
      throw new Error(e.message);
    }
  }
}

export function deletePostRequestAction(id) {
  return async function(dispatch) {
    try {

      await deletePostAsync(id);
      dispatch(deletePostAction(id));
    } catch (e) {
      throw new Error(e.message);
    }
  }
}

export function updatePostRequestAction(id) {
  return async function (dispatch, getState) {
    const { posts } = getState();
    const post = posts.items.find(postItem => postItem.id === id);
    const updatedPost = {...post, status: !post.status};

    await updatePostAsync(updatedPost.id, updatedPost);

    dispatch(updatePostAction(updatedPost));
  }
}