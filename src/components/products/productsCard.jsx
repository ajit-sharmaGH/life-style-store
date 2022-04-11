import "./productsCard.css";
import axios from "axios";
import { Navbar } from "../home/navbar.js";
import { useState, useEffect } from "react";
import { useProductsFilter } from "../../context/filter-context.js";
import { useCart } from "../../context/cart-context.js";
import { useWishlist } from "../../context/wishlistContext.js";
import {
  getSortedProducts,
  getFilteredProducts,
} from "../../reducers/productsFilterReducer.js";
const ProductsCard = () => {
  const { cartState, cartItemsDispatch } = useCart();
  const { wishlistItemsDispatch } = useWishlist();
  const [products, setProducts] = useState([]);
  const { state } = useProductsFilter();
  useEffect(() => {
    fetchProducts();
  }, []);

  const { category, rating, sortBy, range } = state;
  const sortedProducts = getSortedProducts(products, sortBy);
  const filteredProducts = getFilteredProducts(
    sortedProducts,
    category,
    rating,
    range
  );
  const fetchProducts = async () => {
    try {
      const response = await axios.get("./api/products");
      setProducts(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };
  const addToCart = (
    _id,
    title,
    productImage,
    discountPrice,
    originalPrice,
    rating
  ) => {
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
    });
  };
  return (
    <>
      <Navbar />
      <div className="main-container">
        {filteredProducts.map(
          ({
            title,
            productImage,
            originalPrice,
            discountPrice,
            rating,

            _id,
          }) => (
            <div className="product-card-container" key={_id}>
              <img
                src={productImage}
                className="product-card_container-images"
                alt=""
              />
              <h2 className="card_heading">{title}</h2>
              <div className="flex-wrap">
                <p className="card_sub-heading">Rs/{originalPrice}</p>
                <p className="card_sub-text">
                  <strike> off-{discountPrice}</strike>
                </p>
              </div>
              <p className="card_sub-text card_rating-styles">
                rating: {rating}
                <i className="fa-solid fa-star"> </i>
              </p>
              <div className="card_btn">
                {cartState.cartData.some((item) => item._id === _id) ? (
                  <button className="btn-green">In Cart</button>
                ) : (
                  <button
                    className="btn-primary"
                    onClick={() =>
                      addToCart(
                        _id,
                        title,

                        productImage,
                        discountPrice,
                        originalPrice,
                        rating
                      )
                    }
                  >
                    Add To Cart
                  </button>
                )}
                <button
                  className="btn-outline"
                  onClick={() =>
                    wishlistItemsDispatch({ type: "ADD_TO_WISHLIST" })
                  }
                >
                  {" "}
                  <i className="fa-solid fa-heart"> </i>&nbsp;Wishlist
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};
export { ProductsCard };
