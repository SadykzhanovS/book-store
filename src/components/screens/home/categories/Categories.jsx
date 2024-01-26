import React from "react";
import styles from "./Categories.module.css";
import { Link } from "react-router-dom";

import { ReactComponent as Folder } from "../../../../assets/images/screens/home/categories/folder.svg";

function Categories() {
  return (
    <section>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.heading}>
            <Folder />
            <p className={styles.title}>Categories</p>
          </div>
          <div className={styles.buttons}>
            <Link to="/">
              <button className={styles.button}>Adventure</button>
            </Link>
            <Link to="/">
              <button className={styles.button}>Fantasy</button>
            </Link>
            <Link to="/">
              <button className={styles.button}>Adventure</button>
            </Link>
            <Link to="/">
              <button className={styles.button}>Fantasy</button>
            </Link>
            <Link to="/">
              <button className={styles.button}>Adventure</button>
            </Link>
            <Link to="/">
              <button className={styles.button}>Fantasy</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
