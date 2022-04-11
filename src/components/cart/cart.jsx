import "./cart.css";
import { useCart } from "../../context/cart-context.js";
const CartComponent = () => {
  const { cartState, cartItemsDispatch } = useCart();
  const totalCalculatedCost = () => {
    return cartState.cartData.reduce((sum, currentPrice) => {
      return (sum = sum + currentPrice.totalPrice);
    }, 0);
  };
  const discountCalculatedCost = () => {
    return cartState.cartData.reduce((sum, currentValue) => {
      return (sum = sum + currentValue.discountPrice * currentValue.quantity);
    }, 0);
  };
  const removeFromCart = (item) => {
    cartItemsDispatch({
      type: "REMOVE_FROM_CART",
      payload: { value: item },
    });
  };
  const decreaseQuantity = (item) => {
    const product = cartState.cartData.find((data) => data._id === item);
    if (product.quantity > 1) {
      cartItemsDispatch({
        type: "DECREASE_QUANTITY",
        payload: { value: item },
      });
    }
  };
  const increaseQuantity = (item) => {
    cartItemsDispatch({
      type: "INCREASE_QUANTITY",
      payload: { value: item },
    });
  };

  return (
    <div className="flex-center  cart-body-container">
      <div className="flex-wrap">
        <div className="flex-col-center">
          <h3 className="cart-heading mt-3">
            Cart Items: {cartState.cartCounter}
          </h3>
          {cartState.cartData.map(
            ({
              _id,
              title,
              productImage,
              discountPrice,
              originalPrice,
              rating,
              quantity,
            }) => {
              return (
                <div key={_id} className="cart-product-container flex">
                  <div className="cart_images">
                    <img src={productImage} alt="" />
                  </div>
                  <div className="cart_products-detail flex-col">
                    <h5 className="sub-headings">{title}</h5>

                    <span className="cart_original-pricing">
                      Rs/ {originalPrice}{" "}
                    </span>
                    <strike className="cart_discount-pricing">
                      {" "}
                      off-{discountPrice}
                    </strike>
                    <span className="flex">
                      <button onClick={() => decreaseQuantity(_id)}>-</button>
                      <label className="quantity-showing">{quantity}</label>
                      <button onClick={() => increaseQuantity(_id)}>+</button>
                    </span>
                    <span className="cart_rating">
                      Rating: {rating} <i className="fa-solid fa-star"> </i>{" "}
                    </span>

                    <button
                      className="btn-dark cart_button"
                      onClick={() => removeFromCart(_id)}
                    >
                      Remove From Cart
                    </button>
                    <button className="btn-outline cart_button">
                      Move to Wishlist
                    </button>
                  </div>
                </div>
              );
            }
          )}
        </div>
        {cartState.cartCounter > 0 ? (
          <div>
            <h3 className="cart-heading mt-3 flex-col-center">Price Card</h3>
            <div className="order_details-container flex-col">
              <p className="sub-headings">Price Details</p>
              <hr className="hr-tag" />
              <div className="flex-row price">
                <li className="price-tag">Price</li>
                <li>Rs:&nbsp;{`${totalCalculatedCost()}`}</li>
              </div>
              <div className="flex-row discount">
                <li className="price-tag">discount</li>
                <li>Rs:{`${discountCalculatedCost()}`}</li>
              </div>
              <div className="flex-row delivery-charge">
                <li className="price-tag">delivery Charge</li>
                <li>Rs: 100</li>
              </div>
              <hr className="hr-tag" />
              <div className="flex-row total-amount">
                <li className="price-tag">total amount</li>
                <li>
                  Rs:
                  {`${totalCalculatedCost() - discountCalculatedCost() + 100}`}
                </li>
              </div>
              <hr className="hr-tag" />
              <div className="flex-row delivery-charge">
                <li className="price-tag">
                  You Will Save: Rs:&nbsp;{`${discountCalculatedCost()}`}{" "}
                  &nbsp;on this order
                </li>
              </div>

              <button className="btn-outline order-btn">Place Order</button>
            </div>
          </div>
        ) : (
          <p></p>
        )}
        ;
      </div>
    </div>
  );
};
export { CartComponent };
