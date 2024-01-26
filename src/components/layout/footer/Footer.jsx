import React from "react";
import styles from "./Footer.module.css";

import { ReactComponent as Linkedin } from "../../../assets/images/layout/footer/linkedin.svg";
import { ReactComponent as Github } from "../../../assets/images/layout/footer/github.svg";
import { ReactComponent as Figma } from "../../../assets/images/layout/footer/figma.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.line}></div>
          <div className={styles.row}>
            <p className={styles.description}>BookStore Project</p>
            <div className={styles.icons}>
              <a
                  href="https://www.linkedin.com/in/said-sadykzhanov-b051ba288/"
                  target="_blank"
                  className={styles.icon}
              >
                <Linkedin />
              </a>
              <a
                  href="https://github.com/SaidSay"
                  target="_blank"
                  className={styles.icon}
              >
                <Github />
              </a>
              <a
                href="https://www.figma.com/file/gMorbS7WaGmFquFtDqBB0B/BookStore-%5BShort-Project%5D-(Community)?type=design&node-id=2-3&mode=design&t=uVAwrnNllX0TIeW5-0"
                target="_blank"
                className={styles.icon}
              >
                <Figma />
              </a>
            </div>
            <p className={styles.description}>by Said Sadykzhanov</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
