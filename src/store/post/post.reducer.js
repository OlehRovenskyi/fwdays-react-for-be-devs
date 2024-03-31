import {CREATE_POST, DELETE_POST, INIT_POSTS, UPDATE_POST} from "./post.actions.js";

const initialState = {
  items: [],
  filters: [],
}

export default function postsReducer(
  state= initialState,
  { type, payload }
) {
  switch (type) {
    case CREATE_POST:
      return { ...state, items: [...state.items, payload] }

    case INIT_POSTS:
      return { ...state, items: [...payload] }

    case UPDATE_POST:
      return {
        ...state, items: state.items.map((post) => {
          if (post.id === payload.id) {
            return payload;
          }

          return post;
        })
      }

    case DELETE_POST:
      return { ...state, items: state.items.filter((post) => post.id !== payload) }

    default:
      return state;
  }
}