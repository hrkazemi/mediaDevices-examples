import { Outlet, Link } from "react-router-dom";

export function Layout() {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <nav>
          <ul>
            <li>
              <Link to="/">Simple video stream 1</Link>
            </li>
            <li>
              <Link to="/example2">Simple video stream 2</Link>
            </li>
            <li>
              <Link to="/example3">Simple video stream 3</Link>
            </li>

            <li>
              <Link to="/example4">Media device list</Link>
            </li>

            <br />

            <li>
              <Link to="/example5">Screen capture</Link>
            </li>

          </ul>
        </nav>
      </div>

      <div className="main"><Outlet /></div>
    </div>
  );
}
