import React from "react";
import styles from "./Adventure.module.css";
import { useSelector } from "react-redux";

import { ReactComponent as Path } from "../../../../assets/images/screens/home/path.svg";
import Card from "../../../shared/card/Card.jsx";

function Adventure() {
  const books = useSelector((state) => state.books.books);

  return (
    <section>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.heading}>
            <Path />
            <p className={styles.title}>Adventure</p>
          </div>
          <div className={styles.cards}>
            {books
              .filter((book) => {
                return book.category === "adventure";
              })
              .map((book) => {
                return <Card key={book.id} {...book} />;
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Adventure;
