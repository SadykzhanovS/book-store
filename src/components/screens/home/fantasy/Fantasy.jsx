import React from "react";
import styles from "./Fantasy.module.css";
import { useSelector } from "react-redux";

import { ReactComponent as Path } from "../../../../assets/images/screens/home/path.svg";
import Card from "../../../shared/card/Card.jsx";

function Fantasy() {
  const books = useSelector((state) => state.books.books);

  return (
    <section>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.heading}>
            <Path />
            <p className={styles.title}>Fantasy</p>
          </div>
          <div className={styles.cards}>
            {books
              .filter((book) => {
                return book.category === "fantasy";
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

export default Fantasy;
