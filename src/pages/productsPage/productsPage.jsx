import { ProductsNav } from "../../components/products/productsNav.js";
import { ProductsComponent } from "../../components/products/productsCard.jsx";
import { ProductsFilter } from '../../components/products/productsFilter.jsx';
const Products = () => {
  return (
    <div>
      <ProductsNav />
      <ProductsFilter />
      <ProductsComponent />
     
    </div>
  );
};
export { Products };
