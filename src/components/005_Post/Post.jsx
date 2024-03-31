import './Post.scss';
import {PostItem} from "./PostItem/PostItem.jsx";
import {useState} from "react";
import {AddPost} from "./AddPost/AddPost.jsx";

const postInit = [{
  id: 1,
  title: 'PostAsync 1',
  description: 'PostAsync 1 content',
}, {
  id: 2,
  title: 'PostAsync 2',
  description: 'PostAsync 2 content',
}];

export function Post () {
  const [posts, setPosts] = useState(postInit);

  function addPost(post) {
    setPosts([
      ...posts,
      {
        id: 'id' + Math.random().toString(36).substr(2, 9),
        ...post,
        // title: post.title,
        // description: post.description
      }
    ]);
  }

  return (
    <>
      <h1>Post</h1>
      <p>Post page content</p>

      <ul className="posts">
        {posts && posts?.map(
          (post) => <PostItem key={post.id} post={post} />)
        }
      </ul>

      <AddPost onAddPost={addPost} />
    </>
  );
}