import "./productsPage.css";
// import { Navbar } from "../../components/home/navbar.js";
import { ProductsCard } from "../../components/products/productsCard.jsx";
import { ProductsFilter } from "../../components/productsFilter/productsFilter.jsx";
const Products = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="products_filter_display-flex">
        <ProductsFilter />
        <ProductsCard />
      </div>
    </div>
  );
};
export { Products };
