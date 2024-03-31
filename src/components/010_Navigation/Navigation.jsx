export function Navigation() {
  return (
    <div id="sidebar">
      <nav>
        <ul className="menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/counter">Counter</a>
          </li>
          <li>
            <a href="/posts">Post Redux</a>
          </li>
          {/*<li>*/}
          {/*  <a href="/user">User list</a>*/}
          {/*</li>*/}
        </ul>
      </nav>
    </div>
  );
}