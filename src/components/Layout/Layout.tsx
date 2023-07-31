import { Outlet, Link } from "react-router-dom";

export function Layout() {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <nav>
          <ul>
            <li>
              <Link to="/">Video stream (getUserMedia)</Link>
            </li>
            <li>
              <Link to="/example2">Video stream (deviceId)</Link>
            </li>
            <li>
              <Link to="/example3">Video stream (custom hook)</Link>
            </li>
            <li>
              <Link to="/example-q">Video stream Quality</Link>
            </li>
            <li>
              <Link to="/example4">Media device list</Link>
            </li>

            <br />

            <li>
              <Link to="/example5">Screen capture</Link>
            </li>
            <li>
              <Link to="/snapshot">Snapshot</Link>
            </li>

          </ul>
        </nav>
      </div>

      <div className="main"><Outlet /></div>
    </div>
  );
}
