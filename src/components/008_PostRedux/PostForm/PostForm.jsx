import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getPostAsync} from "../PostAsyncApi.js";
import {useNavigate, useParams} from "react-router-dom";
import {updatePostAsync} from "../../006_PostAsync/PostAsyncApi.js";

export function PostForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { postId } = useParams();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const loadData = async () => {
    const post = await getPostAsync(postId);
    setTitle(post.title);
    setDescription(post.description);
  };

  useEffect(() => {
    loadData();
  }, []);

  async function submit(e) {
    // console.log(data)
    // updatePostAsync(postId, {title, description});
    e.preventDefault();

    if (postId) {
      await updatePostAsync(postId, {title, description});

      navigate('/posts');
    }
  }

  return (
    <div>
      <h2>Post Form</h2>

      <form onSubmit={(e) => submit(e)}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}