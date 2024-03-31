import {Link} from "react-router-dom";

export function Navigation() {
  return (
    <div id="sidebar">
      <nav>
        <ul className="menu">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/counter"}>Counter</Link>
          </li>
          <li>
            <Link to={"/posts"}>Post Redux</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}