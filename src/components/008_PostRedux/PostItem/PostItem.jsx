import './PostItem.scss';
export function PostItem({post, onDeletePost}) {
  return (
    <li className="post-item">
      <div className="post-title border">{post.title}</div>
      <div className="post-description border">{post.description}</div>
      <div>
        <button onClick={() => onDeletePost(post.id)}>delete</button>
      </div>
    </li>
  );
}