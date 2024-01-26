import React from "react";
import styles from "./Home.module.css";

import Headline from "./headline/Headline.jsx";
import Categories from "./categories/Categories.jsx";
import Fantasy from "./fantasy/Fantasy.jsx";
import Adventure from "./adventure/Adventure.jsx";

function Home() {
  return (
    <main className={styles.home}>
      <Headline />
      <Categories />
      <Fantasy />
      <Adventure />
    </main>
  );
}

export default Home;
