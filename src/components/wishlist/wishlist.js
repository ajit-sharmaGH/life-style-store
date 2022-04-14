import "./wishlist.css";
import { useWishlist } from "../../context/wishlistContext";
import { Navbar } from "../home/navbar.js";
import {Link} from "react-router-dom";
import { useCart } from "../../context/cart-context";
const WishlistComponent = () => {
  const { cartState, cartItemsDispatch } = useCart();
  const { wishlistState, wishlistItemsDispatch } = useWishlist();

  return (
    <>
      <Navbar />
      <div className="wishlist_body-container">
        <h3 className="flex-center">
          <span className="heading_wishlist-counter">
            Wishlist Items: {wishlistState.wishlistCounter}
          </span>
        </h3>
        <div className="main_container-wishlist flex-wrap-center">
          {wishlistState.wishlistData.map(
            ({
              title,
              productImage,
              originalPrice,
              discountPrice,
              rating,
              ratingLogo,
              _id,
            }) => (
              <div className="product-card-container wishlist_card" key={_id}>
                <img
                  src={productImage}
                  className="product-card_container-images"
                  alt=""
                />
                <h2 className="card_heading">{title}</h2>
                <div className="flex-wrap">
                  <p className="card_sub-heading">Rs:&nbsp;{originalPrice}</p>
                  <p className="card_sub-text">
                    <strike> off/Rs:&nbsp;{discountPrice}</strike>
                  </p>
                </div>
                <p className="card_sub-text card_rating-styles">{rating}</p>
                <p className="card_rating-logo">{ratingLogo}&nbsp;⭐</p>
                <div className="card_btn">
                  {cartState.cartData.some((item) => item._id === _id) ? (
                      <Link to ="/cart">
                    <button className="btn-dark">Go To Cart</button>
                    </Link>
                  ) : (
                    <button
                      className="btn-primary"
                      onClick={() =>
                        cartItemsDispatch({
                          type: "ADD_TO_CART",
                          payload: {
                            value: {
                              _id,
                              title,
                              productImage,
                              discountPrice,
                              originalPrice,
                              quantity: 1,
                              totalPrice: originalPrice,
                              rating,
                            },
                          },
                        })
                      }
                    >
                      Add To Cart
                    </button>
                  )}
                  <div>
                    {wishlistState.wishlistData.some(
                      (item) => item._id === _id
                    ) ? (
                      <i className="fa-solid fa-heart card_wishlist-icon card_wishlist-added" 
                      onClick={() =>  wishlistItemsDispatch({
                        type: "REMOVE_FROM_WISHLIST",
                        payload: {
                          value: _id,
                        },
                      })}
                      ></i>
                    ) : (
                        <></>
                    
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};
export { WishlistComponent };
