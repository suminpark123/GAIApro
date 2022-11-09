import { Link } from "react-router-dom";
import styles from "./product.module.css";
import { useEffect } from "react";
import { preProcessFile } from "typescript";

export const Product = ({ product, convertPrice }) => {
  const { id, name, provider, price, image } = product;

  return (
    product && (
      <div className={styles.product}>
        <Link to={`/product/${id}`}>
          <div className={styles.product_image}>
            <img src={process.env.PUBLIC_URL + image} alt="product" />
          </div>
        </Link>
        <div className={styles.store}>
          <span>{provider}</span>
        </div>

        <div className={styles.product_name}>
          <span>{name}</span>
        </div>

        <div className={styles.product_price}>
          <span className={styles.price}>{convertPrice(price)}</span>
          <span className={styles.unit}>원</span>
        </div>
      </div>
    )
  );
};
