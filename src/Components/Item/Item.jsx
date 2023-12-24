import "./Item.css";
import {Link} from 'react-router-dom';

export function Item( data_product ) {
  return (
    <div className="item">
      <Link to={`/product/${data_product.id}`}><img onClick={window.scrollTo(0,0)} src={data_product.image} alt="" /></Link>
      <p>{data_product.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${data_product.new_price}</div>
        <div className="item-price-old">${data_product.old_price}</div>
      </div>
    </div>
  );
}
