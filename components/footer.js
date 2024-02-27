import { memo } from "react";
import styles from "./footer.module.css";

const Footer = memo(() => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.buttonFrameParent}>
          <div className={styles.buttonFrame}>
            <div className={styles.heading3}>Do you also love email?</div>
            <div className={styles.formJoin}>
              <div className={styles.dontMissOutContainer}>
                <p className={styles.dontMissOut}>
                  Don’t miss out on !important tips, our short and
                </p>
                <p className={styles.dontMissOut}>sweet weekly email.</p>
              </div>
              <div className={styles.form}>
                <div className={styles.yourEmail}>Your email</div>
                <button className={styles.button}>
                  <div className={styles.join}>Join</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.archivesList}>
            <div className={styles.heading31}>Product</div>
            <div className={styles.listItem}>Code Editor</div>
            <div className={styles.listItem1}>{`Approvals & Feedback`}</div>
            <div className={styles.listItem2}>Email Design Systems</div>
            <div className={styles.listItem3}>Analytics</div>
            <div className={styles.listItem4}>{`Previews & Testing`}</div>
            <div className={styles.listItem5}>Archives</div>
            <div className={styles.listItem6}>For Teams</div>
            <div className={styles.listItem7}>Pricing</div>
          </div>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.googleDeveloperStudent}>
            Google Developer Student Club
          </div>
          <div className={styles.linkTerms}>Terms and Conditions</div>
          <div className={styles.linkPrivacy}>Privacy</div>
        </div>
      </div>
      <div className={styles.documentationGuidesLessonsS}>
        <div className={styles.resourcesList}>
          <div className={styles.heading32}>Resources</div>
          <div className={styles.listItem8}>Documentation</div>
          <div className={styles.listItem9}>Guides</div>
          <div className={styles.listItem10}>Lessons</div>
          <div className={styles.listItem11}>Customers</div>
          <div className={styles.listItem12}>Sessions</div>
          <div className={styles.listItem13}>Support</div>
          <div className={styles.listItem14}>Changelog</div>
          <div className={styles.listItem15}>Status</div>
        </div>
        <div className={styles.resourcesList}>
          <div className={styles.heading33}>Company</div>
          <div className={styles.listItem16}>About</div>
          <div className={styles.listItem17}>Blog</div>
          <div className={styles.listItem18}>Climate</div>
          <div className={styles.listItem19}>Contact</div>
        </div>
      </div>
      <div className={styles.linklist}>
        <div className={styles.docsandguidesWrapper}>
          <div className={styles.docsandguides}>
            <div className={styles.heading34}>Team</div>
            <div className={styles.listItem20}>Core members</div>
            <div className={styles.listItem21}>Members</div>
          </div>
        </div>
        <div className={styles.sVGlinkslist}>
          <div className={styles.linkHelloparcelio}>Follow us on</div>
          <img
            className={styles.linkSvg}
            loading="eager"
            alt=""
            src="/link--svg.svg"
          />
          <img className={styles.linkSvg} alt="" src="/link--svg-1.svg" />
          <img className={styles.linkSvg} alt="" src="/link--svg-2.svg" />
          <img className={styles.linkSvg} alt="" src="/link--svg-3.svg" />
        </div>
      </div>
    </footer>
  );
});

export default Footer;
