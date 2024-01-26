import React from "react";
import styles from "./Cards.module.css";
import { useSelector } from "react-redux";

import { ReactComponent as Book } from "../../../../assets/images/screens/favorites/book.svg";
import Card from "../../../shared/card/Card.jsx";

function Cards() {
  const books = useSelector((state) => state.books.books);
  const favorites = books.filter((book) => {
    return book.favorites;
  });

  return (
    <section>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.cards}>
            {favorites.length < 1 ? (
              <div className={styles.empty}>
                <Book />
                <p>Nothing was found :\</p>
              </div>
            ) : (
              favorites.map((book) => {
                return <Card key={book.id} {...book} />;
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
