import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext.jsx";
import { useParams } from "react-router-dom";
import { Breadcrum } from "../Components/Breadcrums/Breadcrum.jsx";
import { ProductDisplay } from "../Components/ProductDisplay/ProductDisplay.jsx";
import { DescriptionBox } from "../Components/DescriptionBox/DescriptionBox.jsx";
import { RelatedProducts } from "../Components/RelatedProducts/RelatedProducts.jsx";

export function Product() {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  );
}
