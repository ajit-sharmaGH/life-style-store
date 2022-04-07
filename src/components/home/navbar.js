import { Link } from "react-router-dom";
import React, { useState } from "react";
import classNames from "classnames";
import { useCart } from "../../context/cart-context.js";
import { useWishlist } from "../../context/wishlistContext.js";
import "./navbar.css";
export function Navbar() {
  const [isSidebarMenu, setIsSidebarMenu] = useState(false);
  const showSidebar = () => {
    setIsSidebarMenu(!isSidebarMenu);
  };
  const { cartState } = useCart();
  const { wishlistState } = useWishlist();

  return (
    <>
      <header className="header-part">
        <Link className="logo" to="/">
          <h1> Lifestyle Store </h1>
        </Link>
        <div className="search-bar">
          <input type="text" placeholder="search Products" />
          <Link to="#">
            <i className="fa-solid fa-magnifying-glass"> </i>
          </Link>
        </div>
        <li className="hamburger" onClick={showSidebar}>
          <i class="fa-solid fa-bars"> </i>
        </li>
        <ul className="navlink">
          <li>
            <Link to="/products"> Products </Link>
          </li>
          <li className="badge_container">
            <Link to="/cart">
              <i className="fa-solid fa-cart-arrow-down"> </i>
            </Link>
            <span className="icon-badge"> {cartState.cartCounter} </span>
          </li>
          <li className="badge_container">
            <Link to="/wishlist">
              <i className="fa-solid fa-heart"> </i>
            </Link>
            <span className="icon-badge">
              {" "}
              {wishlistState.wishlistCounter}{" "}
            </span>
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
            <Link to="/products">
              {" "}
              <i className="fa-solid fa-shirt"> </i> Products{" "}
            </Link>
          </li>
          <li onClick={showSidebar} className="badge_container">
            <label className="sidebar_icon-badge">
              {cartState.cartCounter}
            </label>
            <Link to="/cart">
              <i className="fa-solid fa-cart-arrow-down"> </i>
              Cart
            </Link>
          </li>
          <li onClick={showSidebar} className="badge_container">
            <Link to="/wishlist">
              <i className="fa-solid fa-heart"> </i>
              Wishlist
            </Link>
            <label className="sidebar_icon-badge">
              {wishlistState.wishlistCounter}
            </label>
          </li>
          <li onClick={showSidebar}>
            <Link to="/profile">
              <i className="fa-solid fa-user-plus"> </i>
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
