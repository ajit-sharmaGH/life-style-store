import { Link } from "react-router-dom";
import React, { useState } from "react";
import classNames from "classnames";
import { useCart } from "../../context/cart-context.js";
import { useWishlist } from "../../context/wishlistContext.js";
import "./navbar.css";
import "../productsFilter/productsFilter.css";
import { useProductsFilter } from "../../context/filter-context.js";
export function Navbar() {
  const { state, dispatch } = useProductsFilter();

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
          <span className="flex">
            <li>
              <Link to="/products" onClick={showSidebar}>
                Products{`>`} <i className="fa-solid fa-shirt"> </i>
              </Link>
            </li>

            <li>
              <Link to="/profile" onClick={showSidebar}>
                <i className="fa-solid fa-user-plus"> </i>
              </Link>
            </li>
          </span>
        </ul>
        <div className="sidebar_products-filter">
          <div>
            <button onClick={() => dispatch({ type: "CLEAR_ALL" })}>
              <Link to="/products" onClick={showSidebar}>
                {" "}
                Clear Filter
              </Link>
            </button>
            <h2 className="filter_heading">Range</h2>
            <div>
              <input
                type="number"
                name="price"
                Min={250}
                Max={10000}
                Step={150}
                defaultValue={state.range}
                onChange={(event) =>
                  dispatch({ type: "RANGE", payload: event.target.value })
                }
                className="range-input"
                placeholder="Min:250"
              />
              <span className="flex-col">
                <label>min: Rs/- 250 </label>
                <label>max: Rs/- 10k</label>
              </span>
            </div>
          </div>
          <div>
            <h2 className="filter_heading">Category</h2>

            <p>
              <input
                type="checkbox"
                name=""
                checked={state.category.menWear}
                onChange={() =>
                  dispatch({ type: "CATEGORY", payload: "menWear" })
                }
              />
              &nbsp;Men-Wear
            </p>
            <p>
              <input
                type="checkbox"
                name=""
                checked={state.category.womenWear}
                onChange={() =>
                  dispatch({ type: "CATEGORY", payload: "womenWear" })
                }
              />
              &nbsp;Women-Wear
            </p>
            <p>
              <input
                type="checkbox"
                name=""
                checked={state.category.gadgets}
                onChange={() =>
                  dispatch({ type: "CATEGORY", payload: "gadgets" })
                }
              />
              &nbsp;Gadgets
            </p>
            <p>
              <input
                type="checkbox"
                name=""
                checked={state.category.kidsWear}
                onChange={() =>
                  dispatch({ type: "CATEGORY", payload: "kidsWear" })
                }
              />
              &nbsp;Kids-Wear
            </p>
          </div>
          <div>
            <h2 className="filter_heading">Ratings</h2>
            <p>
              <input
                type="radio"
                name="ratings"
                checked={state.rating === 4}
                onChange={() => dispatch({ type: "RATING", payload: 4 })}
              />
              &nbsp;4⭐&&nbsp;Above
            </p>
            <p>
              <input
                type="radio"
                name="ratings"
                checked={state.rating === 3}
                onChange={() => dispatch({ type: "RATING", payload: 3 })}
              />
              &nbsp;3⭐&&nbsp;Above
            </p>

            <p>
              <input
                type="radio"
                name="ratings"
                checked={state.rating === 2}
                onChange={() => dispatch({ type: "RATING", payload: 2 })}
              />
              &nbsp;2⭐&&nbsp;Above
            </p>
            <p>
              <input
                type="radio"
                name="ratings"
                checked={state.rating === 1}
                onChange={() => dispatch({ type: "RATING", payload: 1 })}
              />
              &nbsp;1⭐&&nbsp;Above
            </p>
            <div>
              <h3 className="filter_heading">Sort By Price</h3>
              <p>
                <input
                  type="radio"
                  name="priceSort"
                  checked={state.sortBy === "LOW_TO_HIGH"}
                  onChange={() =>
                    dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })
                  }
                />
                &nbsp;Low to High
              </p>
              <p>
                <input
                  type="radio"
                  name="priceSort"
                  checked={state.sortBy === "HIGH_TO_LOW"}
                  onChange={() =>
                    dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })
                  }
                />
                &nbsp;High to Low
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
