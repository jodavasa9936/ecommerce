import "./CSS/ShopCategory.css";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext.jsx";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import { Item } from "../Components/Item/Item.jsx";

export function ShopCategory({ category, banner }) {
  const { all_products } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 product
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_products.map((all_product, i) => {
          if (category === all_product.category) {
            return (
              <Item
                key={i}
                id={all_product.id}
                name={all_product.name}
                image={all_product.image}
                new_price={all_product.new_price}
                old_price={all_product.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
}
