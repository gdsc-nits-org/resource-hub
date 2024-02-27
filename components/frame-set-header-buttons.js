import { memo } from "react";
import styles from "./frame-set-header-buttons.module.css";

const FrameSetHeaderButtons = memo(() => {
  return (
    <section className={styles.frameSetHeaderButtons}>
      <div className={styles.containerHeadingSendTests}>
        <textarea
          className={styles.headingSend}
          placeholder="Image"
          rows={8}
          cols={11}
        />
        <div className={styles.loremipsum}>
          <img
            className={styles.linkIcon}
            loading="eager"
            alt=""
            src="/link@2x.png"
          />
          <div className={styles.linkRitesh}>Virat Kohli</div>
        </div>
      </div>
      <div className={styles.sectionHeadingSend}>
        <div className={styles.framedivindexpageStyledDivrd}>
          <div className={styles.headingDoyoualsoloveemail}>
            <h1 className={styles.titleOfThe}>Title of the Resource</h1>
          </div>
          <div className={styles.frameApprovalsFeedback}>
            <h2 className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </h2>
          </div>
          <div className={styles.listItemLinkArchives}>
            <div className={styles.pricing}>
              <button className={styles.link}>
                <div className={styles.tag}>tag</div>
              </button>
              <button className={styles.link}>
                <div className={styles.tag}>tag</div>
              </button>
              <button className={styles.link}>
                <div className={styles.tag}>tag</div>
              </button>
            </div>
            <div className={styles.linkFeb}>Feb 11, 2024</div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default FrameSetHeaderButtons;
