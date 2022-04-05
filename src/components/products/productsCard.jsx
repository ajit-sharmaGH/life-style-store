import "./productsCard.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useProductsFilter } from "../../context/filter-context.js";

import { getSortedProducts,getFilteredProducts} from '../../reducers/productsFilterReducer.js'
const ProductsCard = () => {
  const [products, setProducts] = useState([]);
  const { state } = useProductsFilter();
  useEffect(() => {
      fetchProducts()
  }, []);

  const { 
   category, rating,
   sortBy,range

  } = state;
const sortedProducts = getSortedProducts(products , sortBy);
  const filteredProducts = getFilteredProducts(sortedProducts, category, rating, range);
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
          {filteredProducts.map((product)=>(
          <div className="product-card-container" key ={product.id}>
            <img
              src={product.productImage}
              className="product-card_container-images"
              alt=""
            />
            <h2 className="card_heading">{product.title}</h2> 
            <div className="flex-wrap">
            <p className="card_sub-heading">
              Rs/{product.originalPrice}
              </p>
            <p className="card_sub-text">
            <strike> off-{product.discountPrice}</strike>
              
            </p>
           
            </div>
            <p className="card_sub-text card_rating-styles">
              rating: {product.rating}

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
