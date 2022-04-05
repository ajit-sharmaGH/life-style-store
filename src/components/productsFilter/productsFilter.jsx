import "./productsFilter.css";
import { useProductsFilter } from "../../context/filter-context.js";

const ProductsFilter = () => {
  const { state, dispatch } = useProductsFilter();
  return (
    <div className="sidebar-link">
      <div class="price-filter filter">
        <button onClick={() => dispatch({ type: "CLEAR_ALL" })}>
          Clear All
        </button>
        <h2 class="headings">Range</h2>
        <p>
          <input
            type="number"
            name="price"
            Min={250}
            Max={10000}
            Step={150}
            defaultValue={state.range}
            onChange={
              
                (event) => dispatch({ type: "RANGE", payload: event.target.value })
            }
        className="range-input" placeholder="Min:250" />
        <span className="flex-col">
          <label>min: Rs/- 250 </label><label> 
           max: Rs/- 10k</label>
           </span>
        </p>
      </div>
      <div class="Category-filter filter">
        <h2 class="headings">Category</h2>

        <p>
          <input
            type="checkbox"
            name=""
            checked={state.category.menWear}
            onChange={() => dispatch({ type: "CATEGORY", payload: "menWear" })}
          />
          Men-Wear
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
          Women-Wear
        </p>
        <p>
          <input
            type="checkbox"
            name=""
            checked={state.category.gadgets}
            onChange={() => dispatch({ type: "CATEGORY", payload: "gadgets" })}
          />
          Gadgets
        </p>
        <p>
          <input
            type="checkbox"
            name=""
            checked={state.category.kidsWear}
            onChange={() => dispatch({ type: "CATEGORY", payload: "kidsWear" })}
          />
          Kids-Wear
        </p>
      </div>
      <div class="ratings-filter filter">
        <h2 class="headings">Ratings</h2>
        <p>
          <input
            type="radio"
            name="rating"
            checked={state.rating === 4}
            onChange={() => dispatch({ type: "RATING", payload: 4 })}
          />
          &nbsp;4&nbsp;<i class="fa-solid fa-star"></i>&&nbsp;Above
        </p>
        <p>
          <input
            type="radio"
            name="rating"
            checked={state.rating === 3}
            onChange={() => dispatch({ type: "RATING", payload: 3 })}
          />
          &nbsp;3&nbsp;<i class="fa-solid fa-star"></i>&&nbsp;Above
        </p>

        <p>
          <input
            type="radio"
            name="rating"
            checked={state.rating === 2}
            onChange={() => dispatch({ type: "RATING", payload: 2 })}
          />
          &nbsp;2&nbsp;<i class="fa-solid fa-star"></i>&&nbsp;Above
        </p>
        <p>
          <input
            type="radio"
            name="rating"
            checked={state.rating === 1}
            onChange={() => dispatch({ type: "RATING", payload: 1 })}
          />
          &nbsp;1&nbsp;<i class="fa-solid fa-star"></i>&&nbsp;Above
        </p>
        <div>
          <h3 className="headings">Sort By Price</h3>
          <p>
            <input
              type="radio"
              name="lowToHigh"
              checked={state.sortBy === "LOW_TO_HIGH"}
              onChange={() =>
                dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })
              }
            />
            Price: Low to High
          </p>
          <p>
            <input
              type="radio"
              name="hightToLow"
              checked={state.sortBy === "HIGH_TO_LOW"}
              onChange={() =>
                dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })
              }
            />
            Price: High to Low
          </p>
        </div>
      </div>
    </div>
  );
};
export { ProductsFilter };
