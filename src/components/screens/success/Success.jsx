import React from "react";
import styles from "./Success.module.css";
import {Link} from "react-router-dom";

import { ReactComponent as Image } from "../../../assets/images/screens/success/success.svg";

function Success() {
  return (
    <div>
      <div className="container">
        <div className={styles.box}>
          <Image className={styles.image}/>
          <div className={styles.content}>
            <p className={styles.title}>Thank you for your order!</p>
            <p className={styles.subtitle}>
              Check your e-mail inbox for the receipt
            </p>
              <Link to="/">
                  <button className={styles.button}>Continue Shopping</button>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
