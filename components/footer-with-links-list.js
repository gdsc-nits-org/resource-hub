import { memo } from "react";
import styles from "./footer-with-links-list.module.css";

const FooterWithLinksList = memo(() => {
  return (
    <section className={styles.footerWithLinksList}>
      <div className={styles.productResourcesList}>
        <div className={styles.sectionHeading2SendParent}>
          <div
            className={styles.sectionHeading}
          >{`Resources based on your `}</div>
          <i className={styles.sectionHeading1}>interests</i>
        </div>
        <h2 className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h2>
      </div>
    </section>
  );
});

export default FooterWithLinksList;
