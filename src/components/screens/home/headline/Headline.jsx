import React from "react";
import styles from "./Headline.module.css";
import { Link } from "react-router-dom";

import { ReactComponent as Book } from "../../../../assets/images/screens/home/headline/book.svg";
import Form from "../../../shared/form/Form.jsx";
import { ReactComponent as Binoculars } from "../../../../assets/images/screens/home/headline/binoculars.svg";
import image from "/image.png";

function Headline() {
  return (
    <section>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.content}>
            <p className={styles.title}>
              What book you <br />
              looking for?
              <Book className={styles.book} />
            </p>
            <p className={styles.subtitle}>
              Explore our catalog and find your next read.
            </p>
            <Form />
            <div className={styles.row}>
              <Link to="/">
                <button className={styles.button}>
                  Explore
                  <Binoculars />
                </button>
              </Link>
              <div className={styles.line}></div>
            </div>
          </div>
          <div className={styles.image}>
            <img src={image} alt="image headline" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Headline;
