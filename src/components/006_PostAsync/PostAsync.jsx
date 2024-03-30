import './PostAsync.scss';
import {PostItem} from "./PostItem/PostItem.jsx";
import {useEffect, useState} from "react";
import {AddPost} from "./AddPost/AddPost.jsx";
import {createPostAsync, deletePostAsync, getPostsAsync} from "./PostAsyncApi.js";

export function PostAsync() {
  const [posts, setPosts] = useState([]);

  async function initPosts() {
    try {
      const initPosts = await getPostsAsync();
      setPosts(initPosts);
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
      setPosts([
        ...posts,
        createdPost
      ])
    } catch (e) {
      console.warn(e);
    }
  }

  async function deletePost(id) {
    try {
      await deletePostAsync(id);

      const allPosts = posts.filter((item) => item.id !== id);
      setPosts(allPosts);
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