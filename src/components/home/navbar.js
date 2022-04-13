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
    <div>
      <header className="lifestyleStore_header-part flex-wrap">
        <Link className="lifestyleStore_logo" to="/">
          <h1> Lifestyle Store </h1>
        </Link>
        <div className="lifestyleStore_search-bar">
          <input
            type="text"
            placeholder="search Products"
            className="products_search-bar"
          />
          <Link to="#">
            <i className="fa-solid fa-magnifying-glass"> </i>
          </Link>
        </div>
        <li className="hamburger" onClick={showSidebar}>
          <i class="fa-solid fa-bars"> </i>
        </li>
        <ul className="lifestyleStore_navlink">
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
      <header className="lifestyleStore_header-part-2 flex-wrap">
        <div className="logo-and-links flex-wrap">
          <Link className="lifestyleStore_logo-2" to="/">
            <h1> Lifestyle Store </h1>
          </Link>

          <ul className="lifestyleStore_navlink flex">
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
          </ul>
        </div>
        <div className="burger-and-search flex-wrap">
          <div className="lifestyleStore_search-bar-2">
            <input
              type="text"
              placeholder="search Products"
              className="products_search-bar-2"
            />
            <Link to="#">
              <i className="fa-solid fa-magnifying-glass"> </i>
            </Link>
          </div>
          <li className="hamburger-2" onClick={showSidebar}>
            <i class="fa-solid fa-bars"> </i>
          </li>
        </div>
      </header>
      <div
        className={classNames("side-nav-menu", {
          "side-nav-menu-active": isSidebarMenu,
        })}
      >
        <ul className="sidebar-navlink">
          <Link to="/">
            <h1 className="sidebar-logo"> Lifestyle Store </h1>
          </Link>
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
    </div>
  );
}
