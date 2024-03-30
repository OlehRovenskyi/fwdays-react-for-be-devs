import './PostItem.scss';
export function PostItem({post}) {
  return (
    <li className="post-item">
      <div className="post-title border">{post.title}</div>
      <div className="post-description border">{post.description}</div>
      <div>
        <button>delete</button>
      </div>
    </li>
  );
}