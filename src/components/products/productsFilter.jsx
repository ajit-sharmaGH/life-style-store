
import './productsFilter.css'; 
const ProductsFilter = () => {
  return( 

         <div className="sidebar-link-active">
            <div className="price-filter filter">
                <h2 className="headings">Price</h2>
                <p> <input type="radio" name="price"/>&nbsp;Rs/&nbsp;200-500</p>
                <p> <input type="radio" name="price"/>&nbsp;Rs/&nbsp;500-1000</p>
                <p> <input type="radio" name="price"/>&nbsp;Rs/&nbsp;1000-above</p>
            </div>
            <div className="Category-filter filter">
                <h2 className="headings">Category</h2>
                <p> <input type="checkbox" name="category"/>&nbsp;Gadgets</p>
                <p> <input type="checkbox" name="category"/>&nbsp;Men-Collection</p>
                <p> <input type="checkbox" name="category"/>&nbsp;Kids-Collection</p>
                <p> <input type="checkbox" name="category"/>&nbsp;Women-Collection</p>
            </div>
            <div className="ratings-filter filter">
                <h2 className="headings">Ratings</h2>
                <p> <input type="radio" name="rating"/>&nbsp;4&nbsp;<i className="fa-solid fa-star"></i>&&nbsp;Above</p>
                <p> <input type="radio" name="rating"/>&nbsp;3&nbsp;<i className="fa-solid fa-star"></i>&&nbsp;Above</p>
                <p> <input type="radio" name="rating"/>&nbsp;2&nbsp;<i className="fa-solid fa-star"></i>&&nbsp;Above</p>
                <p> <input type="radio" name="rating"/>&nbsp;1&nbsp;<i className="fa-solid fa-star"></i>&&nbsp;Above</p>
            </div>
        </div> 
  
  );
}
export {ProductsFilter};
