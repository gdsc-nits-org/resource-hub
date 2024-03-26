import styles from "./Marquee.module.scss";

export const Marquee = ({ children, reverse = false }) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.item}
        style={{ animationDirection: reverse ? "reverse" : "normal" }}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={styles.item}
        style={{ animationDirection: reverse ? "reverse" : "normal" }}
      >
        {children}
      </div>
    </div>
  );
};
