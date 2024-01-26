import React from "react";
import styles from "./Form.module.css";
import { Link } from "react-router-dom";

import { ReactComponent as Search } from "../../../assets/images/shared/form/search.svg";

function Form() {
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        placeholder="Type the name of book or author..."
      />
      <Link to="/">
        <button className={styles.button}>
          <Search />
        </button>
      </Link>
    </form>
  );
}

export default Form;
