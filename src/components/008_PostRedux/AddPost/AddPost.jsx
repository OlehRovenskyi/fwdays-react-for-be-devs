import {useState} from "react";

export function AddPost({onAddPost}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function changeDescription(event) {
    setDescription(event.target.value);
  }

  function submit(event) {
    event.preventDefault();

    onAddPost({
      title: title,
      description
    });

    setTitle('');
    setDescription('');
  }

  return (
    <div>
      <h4>Add Post</h4>

      <form onSubmit={(e) => submit(e)}>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Description</label>
        <input type="text" value={description} onChange={(event) => changeDescription(event)} />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}