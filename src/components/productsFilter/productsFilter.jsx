import "./productsFilter.css";
import { useProductsFilter } from "../../context/filter-context.js";
const ProductsFilter = () => {
  const { state, dispatch } = useProductsFilter();
  return (
    <div className="lifestyleStore_sidebar-link">
      <div>
        <button onClick={() => dispatch({ type: "CLEAR_ALL" })}>
          Clear All
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

        <div>
          <input
            type="checkbox"
            name=""
            checked={state.category.menWear}
            onChange={() => dispatch({ type: "CATEGORY", payload: "menWear" })}
          />
          &nbsp;Men-Wear
        </div>
        <div>
          <input
            type="checkbox"
            name=""
            checked={state.category.womenWear}
            onChange={() =>
              dispatch({ type: "CATEGORY", payload: "womenWear" })
            }
          />
          &nbsp;Women-Wear
        </div>
        <div>
          <input
            type="checkbox"
            name=""
            checked={state.category.gadgets}
            onChange={() => dispatch({ type: "CATEGORY", payload: "gadgets" })}
          />
          &nbsp;Gadgets
        </div>
        <div>
          <input
            type="checkbox"
            name=""
            checked={state.category.kidsWear}
            onChange={() => dispatch({ type: "CATEGORY", payload: "kidsWear" })}
          />
          &nbsp;Kids-Wear
        </div>
      </div>
      <div>
        <h2 className="filter_heading">Ratings</h2>
        <p>
          <input
            type="radio"
            name="rating"
            checked={state.rating === 4}
            onChange={() => dispatch({ type: "RATING", payload: 4 })}
          />
          &nbsp;4&nbsp;<i className="fa-solid fa-star"></i>&&nbsp;Above
        </p>
        <p>
          <input
            type="radio"
            name="rating"
            checked={state.rating === 3}
            onChange={() => dispatch({ type: "RATING", payload: 3 })}
          />
          &nbsp;3&nbsp;<i className="fa-solid fa-star"></i>&&nbsp;Above
        </p>

        <div>
          <input
            type="radio"
            name="rating"
            checked={state.rating === 2}
            onChange={() => dispatch({ type: "RATING", payload: 2 })}
          />
          &nbsp;2&nbsp;<i className="fa-solid fa-star"></i>&&nbsp;Above
        </div>
        <div>
          <input
            type="radio"
            name="rating"
            checked={state.rating === 1}
            onChange={() => dispatch({ type: "RATING", payload: 1 })}
          />
          &nbsp;1&nbsp;<i class="fa-solid fa-star"></i>&&nbsp;Above
        </div>
        <div>
          <h3 className="filter_heading">Sort By Price</h3>
          <div>
            <input
              type="radio"
              name="lowToHigh"
              checked={state.sortBy === "LOW_TO_HIGH"}
              onChange={() =>
                dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })
              }
            />
            &nbsp;Price: Low to High
          </div>
          <div>
            <input
              type="radio"
              name="hightToLow"
              checked={state.sortBy === "HIGH_TO_LOW"}
              onChange={() =>
                dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })
              }
            />
            &nbsp;Price: High to Low
          </div>
        </div>
      </div>
    </div>
  );
};
export { ProductsFilter };
