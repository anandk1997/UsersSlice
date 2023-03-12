import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";
import sidebarCss from "../Styles/sidebar.module.scss";

const Sidebar = ({ Page, PofilePgae, PostsPage, GalleryPage, TodoPage }) => {
  const { id } = useParams();

  const listItem = (Page, Link, Name) => (
    <li className={Page && sidebarCss.active}>
      <NavLink to={Link} className={sidebarCss.wrapper_link}>
        <span className={Page ? sidebarCss.active : sidebarCss.inactive}>
          {Name}
        </span>
        <span className={sidebarCss.activeIcon}>
          {Page && <FaAngleRight fill />}
        </span>
      </NavLink>
    </li>
  );

  const hr = () => <hr />;
  const sidebarClass = `d-flex justify-content-center align-items-center ${sidebarCss.sidebar}`;

  return (
    <>
      <div className="">
        <div className={sidebarClass}>
          <ul>
            {listItem(Page === 1, `/${id}/profile`, "Profile")}
            {hr()}
            {listItem(Page === 2, `/${id}/posts`, "Posts")}
            {hr()}
            {listItem(Page === 3, `/${id}/gallery`, "Gallery")}
            {hr()}
            {listItem(Page === 4, `/${id}/todo`, "ToDo")}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
