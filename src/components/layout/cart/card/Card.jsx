import React from "react";
import styles from "./Card.module.css";
import { useDispatch } from "react-redux";

import { contentSlice } from "../../../../utils/contentSlice.jsx";
import { formatterPrice } from "../../../../utils/formatterPrice.jsx";
import {
  decrementCountBookCart,
  deleteBookCart,
  incrementCountBookCart,
} from "../../../../store/bookSlice.jsx";
import { ReactComponent as Delete } from "../../../../assets/images/layout/cart/card/delete.svg";

function Card({ image, title, author, price, count, id }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={"./products/" + image}
        alt="book image"
      />
      <div className={styles.content}>
        <div className={styles.row}>
          <div className={styles.heading}>
            <p className={styles.title}>{contentSlice(title, 8)}...</p>
            <p className={styles.author}>{contentSlice(author, 12)}...</p>
          </div>
          <p className={styles.price}>{formatterPrice.format(price)}</p>
        </div>
        <div className={styles.other}>
          <div className={styles.count}>
            <button
              disabled={count === 1 ? true : null}
              className={styles.decrement}
              onClick={() => dispatch(decrementCountBookCart({ id }))}
            >
              <span></span>
            </button>
            <p className={styles.number}>{count < 10 ? "0" + count : count}</p>
            <button
              disabled={count >= 10 ? true : null}
              className={styles.increment}
              onClick={() => dispatch(incrementCountBookCart({ id }))}
            >
              <span></span>
              <span></span>
            </button>
          </div>
          <div onClick={() => dispatch(deleteBookCart({ id }))}>
            <Delete className={styles.delete}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
