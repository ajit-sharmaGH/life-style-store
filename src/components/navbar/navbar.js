import { Link } from "react-router-dom";
import React, { useState } from "react";

export function Navbar() {
  const [sidebarMenu, setSidebarMenu] = useState("translateX(-15.5rem)");
  const showSidebar = () => {
    if (sidebarMenu === "translateX(-15.5rem)") {
      setSidebarMenu("translateX(0rem)");
    } else {
      setSidebarMenu("translateX(-15.5rem)");
    }
  };
  return (
    <div>
      <div>
        <header className="header-part">
          <div className="logo">
            <h1>Lifestyle&nbsp;Store</h1>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="search Products" />
            <Link to="/">
              <i className="fa-solid fa-magnifying-glass"></i>
            </Link>
          </div>

          <li className="hamburger" onClick={showSidebar}>
            <i class="fa-solid fa-bars"></i>
          </li>

          <ul className="navlink">
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/">
                <i className="fa-solid fa-cart-arrow-down"></i>
                <span className="icon-badge">4</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fa-solid fa-heart"></i>
                <span className="icon-badge">2</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fa-solid fa-user-plus"></i>
              </Link>
            </li>
          </ul>
        </header>
      </div>
      <div className="side-nav-menu" style={{ transform: sidebarMenu }}>
        <ul className="sidebar-navlink">
          <h1 className="sidebar-logo">Lifestyle&nbsp;Store</h1>

          <li>
            <i className="fa-solid fa-shirt"></i>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/">
              <i className="fa-solid fa-cart-arrow-down"></i>
              Cart
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="fa-solid fa-heart"></i>
              Wishlist
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="fa-solid fa-user-plus"></i>
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
