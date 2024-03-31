import './PostItem.scss';
import {Link} from "react-router-dom";

function Detail({description}) {
  return (
    <div className="post-description border">{description}</div>
  );
}

export function PostItem({post, onDeletePost}) {
  return (
    <li className="post-item">
      <Link to={post.id}>
        <div className="post-title border">{post.title}</div>
      </Link>
      <Link to={`post/${post.id}`}>
        <div className="post-description border">{post.description}</div>
      </Link>
      <div>
        <button onClick={() => onDeletePost(post.id)}>delete</button>
      </div>
    </li>
  );
}