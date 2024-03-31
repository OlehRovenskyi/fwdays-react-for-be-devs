import './PostRedux.scss';
import {PostItem} from "./PostItem/PostItem.jsx";
import {useEffect} from "react";
import {AddPost} from "./AddPost/AddPost.jsx";
import {useDispatch, useSelector} from "react-redux";
import {
  createPostRequestAction,
  deletePostRequestAction,
  fetchPostsAction
} from "../../store/post/post.actions.js";

export function PostRedux() {
  const posts = useSelector(state => state.posts.items);
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(fetchPostsAction());
  }, []);

  async function addPost(post) {
    try {
      dispatch(createPostRequestAction(post));
    } catch (e) {
      console.warn(e);
    }
  }

  async function deletePost(id) {
    try {
      dispatch(deletePostRequestAction(id));
    } catch (e) {
      console.warn(e);
    }
  }

  return (
    <>
      <h1>Post</h1>
      <p>Post page content</p>

      <ul className="posts">
        {posts && posts?.map(
          (post) => <PostItem key={post.id} post={post} onDeletePost={deletePost} />)
        }
      </ul>

      <button onClick={(e) => console.log(e)}>Refresh</button>

      <AddPost onAddPost={addPost} />
    </>
  );
}