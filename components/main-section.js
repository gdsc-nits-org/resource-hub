import { memo, useState } from "react";
import styles from "./main-section.module.css";

const MainSection = memo(() => {
  const [whatAreYouValue, setWhatAreYouValue] = useState("");
  return (
    <header className={styles.mainSection}>
      <div className={styles.divnavigationStyleddiv2U4}>
        <div className={styles.textNodeWrapper}>
          <div className={styles.textNode}>
            <img
              className={styles.paragraphFrameIcon}
              alt=""
              src="/paragraph-frame.svg"
            />
            <img
              className={styles.paragraphFrameIcon1}
              alt=""
              src="/vector-1.svg"
            />
            <img
              className={styles.headingFrameIcon}
              alt=""
              src="/vector-2.svg"
            />
          </div>
        </div>
        <div className={styles.linkFrame}>
          <div className={styles.rhub}>RHub</div>
          <div className={styles.home}>Home</div>
        </div>
        <div className={styles.loremIpsum}>
          <div className={styles.profile}>Profile</div>
        </div>
        <div className={styles.resourceFrame}>
          <div className={styles.productHeading}>
            <input
              className={styles.whatAreYou}
              placeholder="What are you looking for?"
              type="text"
              value={whatAreYouValue}
              onChange={(event) => setWhatAreYouValue(event.target.value)}
            />
            <img className={styles.searchIcon} alt="" src="/search@2x.png" />
          </div>
        </div>
        <div className={styles.privacyLink}>
          <div className={styles.linkSign}>Sign in</div>
        </div>
        <button className={styles.itemLink}>
          <div className={styles.signUp}>Sign up</div>
        </button>
      </div>
    </header>
  );
});

export default MainSection;
