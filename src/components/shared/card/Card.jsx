import React from "react";
import styles from "./Card.module.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { formatterPrice } from "../../../utils/formatterPrice.jsx";
import { ReactComponent as Favorites } from "../../../assets/images/shared/card/favorites.svg";
import {
  toggleBookFavorite,
  addBookToCart,
} from "../../../store/bookSlice.jsx";
import { ReactComponent as Cart } from "../../../assets/images/shared/card/cart.svg";

function Card({ id, image, price, favorites }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <Link to={`/${id}`}>
        <img
          className={styles.image}
          src={"./products/" + image}
          alt="card image"
        />
      </Link>
      <div className={styles.other}>
        <p className={styles.price}>{formatterPrice.format(price)}</p>
        <div
          className={favorites ? styles.favoritesActive : styles.favorites}
          onClick={() => dispatch(toggleBookFavorite({ id }))}
        >
          <Favorites />
        </div>
      </div>
      <button
        className={styles.cart}
        onClick={() => dispatch(addBookToCart({ id, count: 1 }))}
      >
        <Cart />
      </button>
    </div>
  );
}

export default Card;
