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