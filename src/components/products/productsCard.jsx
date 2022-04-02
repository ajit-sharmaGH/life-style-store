import "./productsCard.css";
import axios from "axios";
import { useState, useEffect } from "react";
const ProductsCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      fetchProducts()
  }, []);

  const fetchProducts = async () => {
      try {
        
          const response = await axios.get("./api/products");
          setProducts(response.data.products);
  
      } catch (error) {
          console.error(error);
      }
  }

  return (
  
        <div className="main-container">
          {products.map((products)=>(
          <div className="product-card-container" key ={products.id}>
            <img
              src={products.productImage}
              className="product-card_container-images"
              alt=""
            />
            <h2 className="card_heading">{products.title}</h2> 
            <div className="flex-wrap">
            <p className="card_sub-heading">
              Rs/{products.originalPrice}
              </p>
            <p className="card_sub-text">
            <strike> off-{products.discountPrice}</strike>
              
            </p>
           
            </div>
            <p className="card_sub-text card_rating-styles">
              Ratings: {products.rating}

              <i className="fa-solid fa-star"> </i>
            </p>
            <div className="card_btn">
              <button className="btn-primary">Add to Cart</button>
              <button className="btn-outline"> <i className="fa-solid fa-heart"> </i>&nbsp;Wishlist</button>
            </div>
          </div>
          ))}
          
        </div>
     
  );
};
export { ProductsCard};
