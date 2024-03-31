import './PostRedux.scss';
import {PostItem} from "./PostItem/PostItem.jsx";
import {useEffect} from "react";
import {AddPost} from "./AddPost/AddPost.jsx";
import {createPostAsync, deletePostAsync, getPostsAsync} from "./PostAsyncApi.js";
import {useDispatch, useSelector} from "react-redux";
import {createPostAction, deletePostAction, initPostsAction} from "../../store/post/post.actions.js";

export function PostRedux() {
  const posts = useSelector(state => state.posts.items);
  const dispatch = useDispatch();

  async function initPosts() {
    try {
      const initPosts = await getPostsAsync();
      dispatch(initPostsAction(initPosts));
    } catch (e) {
      console.warn(e);
    }
  }

  useEffect(() => {
    initPosts().then();
  }, []);

  async function addPost(post) {
    try {
      const createdPost = await createPostAsync(post);
      dispatch(createPostAction(createdPost));
    } catch (e) {
      console.warn(e);
    }
  }

  async function deletePost(id) {
    try {
      await deletePostAsync(id);

      dispatch(deletePostAction(id));
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