import "./DescriptionBox.css";

export function DescriptionBox() {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that facilitate buying and
          selling products or services over the internet. it server as a virtual
          marketplace where business and individual can showcase their
          productsinteract with customers, and conduct transactions without the
          need for a physical presence. E-commerce websites have gained emmense
          popularity due to their convenience, accesibility, and the global
          reach their offer.
        </p>
        <p>
          E-commerce websites typicall display products or services along with
          detailed descriptions, images, prices and any available(e.g., sizes,
          colors). Each nproduct usually has its own dedicated page with
          relevant information.
        </p>
      </div>
    </div>
  );
}
