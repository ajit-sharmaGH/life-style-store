import "./cart.css";
const CartComponent = () => {
  return (
    <>
      <div className="flex-wrap-center cart-body-container">
        <div className="cart-product-container">
          <img
            src="https://i.ibb.co/C82sGMs/Earphones-with-neck-guitar-in-the-studio.jpg "
            className="product-card_container-images"
            alt=""
          />

          <h2 className="card_heading">Try&nbsp;Headphones</h2>

          <p className="product-add-sub-btn">
            <button className="quantityIncrease">add</button>
            <label className="quantityOutput">1</label>
            <button className="quantityDecrease">sub</button>
          </p>
          <p className="card_sub-heading">Rs/-&nbsp;500</p>
          <p className="card_sub-text">
            off-&nbsp;20%
            <strike>Rs/-600</strike>
          </p>

          <div className="card_btn">
            <button className="btn-primary">Move to Wishlist</button>
            <button className="btn-outline">Remove from Cart </button>
          </div>
        </div>

        <div className="price-card-container">
          <table className="pricing-table">
            <tr>
              <th>Content</th>
              <th>Price</th>
            </tr>
            <tr>
              <td>Items</td>
              <td>6</td>
            </tr>
            <tr>
              <td>Total Mrp</td>
              <td>Rs/&nbsp;8000</td>
            </tr>
            <tr>
              <td>Discount</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>Delivery Charges</td>
              <td>Rs/&nbsp;00</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>Rs/&nbsp;00</td>
            </tr>
          </table>
          <div className="card_btn">
            <button className="btn-outline">Place Order</button>
          </div>
        </div>
      </div>
    </>
  );
};
export { CartComponent };
