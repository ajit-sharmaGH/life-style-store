import './productsFilter.css';
import React from 'react';
const ProductsFilter = () => {
    return ( 
        <div className="sidebar-link"> 
         
            <div class="price-filter filter">
                <h2 class="headings">Price</h2>
                <p> <input type="radio" name="price"/>&nbsp;Rs/&nbsp;200-500</p>
                <p> <input type="radio" name="price"/>&nbsp;Rs/&nbsp;500-1000</p>
                <p> <input type="radio" name="price"/>&nbsp;Rs/&nbsp;1000-above</p>
            </div>
            <div class="Category-filter filter">
                <h2 class="headings">Category</h2>
                <p> <input type="checkbox" name="category"/>&nbsp;Gadgets</p>
                <p> <input type="checkbox" name="category"/>&nbsp;Men-Collection</p>
                <p> <input type="checkbox" name="category"/>&nbsp;Kids-Collection</p>
                <p> <input type="checkbox" name="category"/>&nbsp;Women-Collection</p>
            </div>
            <div class="ratings-filter filter">
                <h2 class="headings">Ratings</h2>
                <p> <input type="radio" name="rating"/>&nbsp;4&nbsp;<i class="fa-solid fa-star"></i>&&nbsp;Above</p>
                <p> <input type="radio" name="rating"/>&nbsp;3&nbsp;<i class="fa-solid fa-star"></i>&&nbsp;Above</p>
                <p> <input type="radio" name="rating"/>&nbsp;2&nbsp;<i class="fa-solid fa-star"></i>&&nbsp;Above</p>
                <p> <input type="radio" name="rating"/>&nbsp;1&nbsp;<i class="fa-solid fa-star"></i>&&nbsp;Above</p>
            </div>
        </div>
       
     

    );
}
export { ProductsFilter };