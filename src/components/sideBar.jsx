import React from "react";
import { Link } from "react-router-dom";

const SideBar = (props) => {
  return (
    <ul>
      <li>
        <Link to="/admin/users">user</Link>
      </li>
      <li>
        <Link to="/admin/posts">posts</Link>
      </li>
    </ul>
  );
};

export default SideBar;
