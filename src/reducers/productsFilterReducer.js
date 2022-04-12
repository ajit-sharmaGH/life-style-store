const initialState = {
  sortBy: null,
  category: {
    menWear: true,
    womenWear: true,
    kidsWear: true,
    gadgets: true,
  },
  search: "",
  rating: "",
  range: 1000,
};const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return { ...state, sortBy: action.payload };
    case "RATING":
      return { ...state, rating: action.payload };

    case "RANGE":
      return { ...state, range: action.payload };

    case "CATEGORY":
      return {
        ...state,
        category: {
          ...state.category,
          [action.payload]: !state.category[action.payload],
        },
      };
    case "SEARCHING_PRODUCTS":
      return { ...state, search: action.payload };
    case "CLEAR_ALL":
      return {
        sortBy: null,
        category: {
          menWear: true,
          womenWear: true,
          kidsWear: true,
          gadgets: true,
        },
        search: "",
        rating: "",
        range: 10000,
      };
    default:
      return state;
  }
};

const getSortedProducts = (products, sortBy) => {
  if (sortBy === "HIGH_TO_LOW") {
    return [...products].sort((a, b) => b.originalPrice - a.originalPrice);
  }
  if (sortBy === "LOW_TO_HIGH") {
    return [...products].sort((a, b) => a.originalPrice - b.originalPrice);
  }
  return products;
};
const getFilteredProducts = (
  products,
  category,
  ratings,
  range
) => {
  return products
    .filter((product) => category[product.categoryName])
    .filter((product) => (ratings === "" ? true : ratings <= product.rating.length))
    .filter((product) => product.originalPrice <= range);
};

export { filterReducer, initialState, getSortedProducts, getFilteredProducts };
