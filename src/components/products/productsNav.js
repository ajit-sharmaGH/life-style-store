import { Link } from "react-router-dom";
import React, { useState } from "react";
import classNames from "classnames";
import "../home/navbar.css";
export function ProductsNav() {
  const [isSidebarMenu, setIsSidebarMenu] = useState(false);
  const showSidebar = () => {
    setIsSidebarMenu(!isSidebarMenu);
  };

  return (
    <div>
      <header className="header-part">
        <div className="logo">
          <h1> Lifestyle Store </h1>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="search Products" />
          <Link to="/">
            <i className="fa-solid fa-magnifying-glass"> </i>
          </Link>
        </div>
        <li className="hamburger" onClick={showSidebar}>
          <i class="fa-solid fa-bars"> </i>
        </li>
        <ul className="navlink">
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="fa-solid fa-cart-arrow-down"> </i>
              <span className="icon-badge"> 4 </span>
            </Link>
          </li>
          <li>
            <Link to="/wishlist">
              <i className="fa-solid fa-heart"> </i>
              <span className="icon-badge"> 2 </span>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <i className="fa-solid fa-user-plus"> </i>
            </Link>
          </li>
        </ul>
      </header>
      <div
        className={classNames("side-nav-menu", {
          "side-nav-menu-active": isSidebarMenu,
        })}
      >
        <ul className="sidebar-navlink">
          <h1 className="sidebar-logo"> Lifestyle Store </h1>
          <li onClick={showSidebar}>
            <i className="fa-solid fa-home"> </i>
            <Link to="/"> Home </Link>
          </li>
          <li onClick={showSidebar}>
            <Link to="/cart">
              <i className="fa-solid fa-cart-arrow-down"> </i>
              Cart
            </Link>
          </li>
          <li onClick={showSidebar}>
            <Link to="/wishlist">
              <i className="fa-solid fa-heart"> </i>
              Wishlist
            </Link>
          </li>
          <li onClick={showSidebar}>
            <Link to="/profile">
              <i className="fa-solid fa-user-plus"> </i>
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}