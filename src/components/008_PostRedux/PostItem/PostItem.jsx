import './PostItem.scss';

function Detail({description}) {
  return (
    <div className="post-description border">{description}</div>
  );
}

export function PostItem({post, onDeletePost}) {
  return (
    <li className="post-item">
      <div className="post-title border">{post.title}</div>
      <Detail className="post-title border" description={post.description} />
      <div className="post-description border">{post.description}</div>
      <div>
        <button onClick={() => onDeletePost(post.id)}>delete</button>
      </div>
    </li>
  );
}