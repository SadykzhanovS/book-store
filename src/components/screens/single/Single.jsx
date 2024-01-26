import React from "react";
import styles from "./Single.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Detail from "./detail/Detail.jsx";
import More from "./more/More.jsx";

function Single() {
  const { id } = useParams();
  const book = useSelector((state) => state.books.books[id - 1]);

  return (
    <main className={styles.single}>
      <Detail {...book} />
      <More id={id} />
    </main>
  );
}

export default Single;
