import { Link } from "react-router-dom";
import classes from "./classes.module.css";

export const ProductItem = ({
  product_id,
  title,
  price,
  category,
  image,
  showMoreDetails,
}) => {
  return (
    <div className={classes.card}>
      {showMoreDetails ? (
        <h4> {title} </h4>
      ) : (
        <Link to={`/products/${product_id}`}>{title}</Link>
      )}
      <img src={image} alt={title} />
      {showMoreDetails && (
        <>
          <ul>
            <li>
              <strong>price</strong> : {price}
            </li>
            <li>
              <strong>category</strong> : {category}
            </li>
          </ul>
          <Link to={`/products`}>click to go back</Link>
        </>
      )}
    </div>
  );
};
