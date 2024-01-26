import React, { useState } from "react";
import styles from "./Detail.module.css";
import { useDispatch } from "react-redux";

import {
  addBookToCart,
  setCart,
  toggleBookFavorite,
} from "../../../../store/bookSlice.jsx";
import { ReactComponent as Favorites } from "../../../../assets/images/screens/single/detail/favorites.svg";
import { formatterPrice } from "../../../../utils/formatterPrice.jsx";
import { ReactComponent as Cart } from "../../../../assets/images/screens/single/detail/cart.svg";

function Detail({ image, favorites, id, title, author, description, price }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  function buyNow() {
    dispatch(addBookToCart({ id, count }));
    dispatch(setCart());
  }

  return (
    <section>
      <div className="container">
        <div className={styles.box}>
          <img
            src={"./products/" + image}
            alt="image book"
            className={styles.image}
          />
          <div className={styles.content}>
            <div className={styles.row}>
              <p className={styles.title}>{title}</p>
              <div
                className={
                  favorites ? styles.favoritesActive : styles.favorites
                }
                onClick={() => dispatch(toggleBookFavorite({ id }))}
              >
                <Favorites />
              </div>
            </div>
            <div className={styles.author}>
              <p>Author (a): {author}</p>
            </div>
            <div className={styles.description}>
              <p>{description}</p>
            </div>
            <div className={styles.row}>
              <p className={styles.price}>{formatterPrice.format(price)}</p>
              <div className={styles.count}>
                <button
                  disabled={count === 1 ? true : null}
                  className={styles.decrement}
                  onClick={() => setCount(count - 1)}
                >
                  <span></span>
                </button>
                <p className={styles.number}>
                  {count < 10 ? "0" + count : count}
                </p>
                <button
                  disabled={count >= 10 ? true : null}
                  className={styles.increment}
                  onClick={() => setCount(count + 1)}
                >
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
            <div className={styles.row}>
              <button
                className={styles.cart}
                onClick={() => dispatch(addBookToCart({ id, count }))}
              >
                <Cart />
              </button>
              <button className={styles.buy} onClick={buyNow}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Detail;
