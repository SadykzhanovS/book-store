import React from "react";
import styles from "./More.module.css";
import { useSelector } from "react-redux";

import { ReactComponent as Path } from "../../../../assets/images/screens/single/more/path.svg";
import Card from "../../../shared/card/Card.jsx";

function More({ id }) {
  const books = useSelector((state) => state.books.books);
  const torn = books[id - 1];
  const similar = books.filter((book) => {
    return book.category === torn.category;
  });

  return (
    <section>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.heading}>
            <Path />
            <p className={styles.title}>View more</p>
          </div>
          <div className={styles.cards}>
            {similar.map((book) => {
              return <Card key={book.id} {...book} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default More;
