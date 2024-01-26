import React from "react";
import styles from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../../assets/images/layout/header/logo.svg";
import { ReactComponent as Favorites } from "../../../assets/images/layout/header/favorites.svg";
import { ReactComponent as Cart } from "../../../assets/images/layout/header/cart.svg";
import {setCart} from "../../../store/bookSlice.jsx";

function Header() {
  const dispatch = useDispatch()
  const books = useSelector((state) => state.books.books);
  const favorites = books.filter((book) => {
    return book.favorites;
  });
  const cart = useSelector((state) => state.books.cart);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.box}>
          <Link to="/" className={styles.logo}>
            <Logo className={styles.book} />
            <h1 className={styles.title}>BookStore</h1>
          </Link>

          <div className={styles.other}>
            <Link to="/favorites">
              <Favorites className={styles.icon} />
              <div
                className={
                  favorites.length ? styles.circleActive : styles.circle
                }
              >
                <p>{favorites.length}</p>
              </div>
            </Link>
            <div onClick={() => dispatch(setCart())}>
              <Cart className={styles.iconLast} />
              <div
                className={cart.length ? styles.circleActive : styles.circle}
              >
                <p>{cart.length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
