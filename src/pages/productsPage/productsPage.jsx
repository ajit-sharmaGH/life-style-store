import './productsPage.css';

import { ProductsNav } from "../../components/products/productsNav.js";
import { ProductsCard } from "../../components/products/productsCard.jsx";
import { ProductsFilter } from '../../components/productsFilter/productsFilter.jsx';
const Products = () => {
  return (
    <div>
      <ProductsNav />
      <div className="products_filter_display-flex">
      <ProductsFilter />
      <ProductsCard />
      </div>
     
    </div>
  );
};
export { Products };
