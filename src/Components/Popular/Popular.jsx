import { Item } from "../Item/Item.jsx";
import data_product from "../Assets/data.js";
import "./Popular.css";

export function Popular() {
  return (
    <div className="popular">
      <h1>Popular IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        
        {data_product.map((item,i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  );
}
