import Head from "next/head";
import MainSection from "../components/main-section";
import FooterWithLinksList from "../components/footer-with-links-list";
import FrameSetHeaderButtons from "../components/frame-set-header-buttons";
import Footer from "../components/footer";
import styles from "./index.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <MainSection />
      <main className={styles.previewsTestingLink}>
        <section className={styles.frameParent}>
          <div className={styles.frameWithHeadingsParent}>
            <div className={styles.frameWithHeadings}>
              <h1 className={styles.heading1}>Resource Hub</h1>
            </div>
            <h2 className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </h2>
          </div>
          <div className={styles.form}>
            <div className={styles.chidigoodplacecom}>chidi@goodplace.com</div>
            <button className={styles.button}>
              <div className={styles.getStarted}>Get started</div>
            </button>
          </div>
        </section>
        <section className={styles.lovedByDevelopersAndMarketParent}>
          <div className={styles.lovedByDevelopers}>
            Loved by developers and marketers alike
          </div>
          <div className={styles.divindexpageStyleddiv16Rd}>
            <h1 className={styles.dummy}>DUMMY</h1>
            <h1 className={styles.dummy}>DUMMY</h1>
            <h1 className={styles.dummy}>DUMMY</h1>
            <h1 className={styles.dummy}>DUMMY</h1>
          </div>
        </section>
        <FooterWithLinksList />
        <FrameSetHeaderButtons />
        <FrameSetHeaderButtons />
        <FrameSetHeaderButtons />
        <FrameSetHeaderButtons />
        <FrameSetHeaderButtons />
        <FrameSetHeaderButtons />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
