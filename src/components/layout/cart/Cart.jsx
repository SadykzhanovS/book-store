import React from "react";
import styles from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ReactComponent as Back } from "../../../assets/images/layout/cart/back.svg";
import Card from "./card/Card.jsx";
import { formatterPrice } from "../../../utils/formatterPrice.jsx";
import { setCart } from "../../../store/bookSlice.jsx";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.books.cart);
  const isCart = useSelector((state) => state.books.isCart);

  function condition() {
    if (cart.length === 0 || cart.length >= 10) {
      return cart.length;
    } else {
      return "0" + cart.length;
    }
  }

  function totalPrice() {
    return cart.reduce((acc, book) => {
      return (acc += book.price * book.count);
    }, 0);
  }

  function success() {
    if (cart.length) {
      return dispatch(setCart());
    }
  }

  return (
    <div>
      <div
        className={isCart ? styles.blurActive : styles.blur}
        onClick={() => dispatch(setCart())}
      />
      <div className={isCart ? styles.contentActive : styles.content}>
        <div className={styles.back} onClick={() => dispatch(setCart())}>
          <Back className={styles.icon} />
          <div className={styles.title}>
            Your Cart <span>({condition()} items)</span>
          </div>
        </div>
        <div className={styles.cards}>
          {cart.length ? (
            cart.map((book) => {
              return <Card key={book.id} {...book} />;
            })
          ) : (
            <p className={styles.empty}>Cart is empty</p>
          )}
        </div>
        <div className={styles.subtotal}>
          <div className={styles.row}>
            <p className={styles.subtitle}>Subtotal:</p>
            <p className={styles.price}>
              {formatterPrice.format(totalPrice())}
            </p>
          </div>
          <Link to={cart.length ? "/success" : ""} onClick={success}>
            <button className={styles.button}>Pay with stripe</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
