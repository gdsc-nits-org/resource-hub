import { Icon } from "@iconify/react";
import styles from "./Footer.module.scss";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <Link
        href="https://gdscnits.in/"
        title="The Technical Backbone of NITS"
        className={styles.title}
      >
        <Icon icon="logos:google-developers" className={styles.icon} />
        Google Developer Students Club, NIT Silchar
      </Link>
    </footer>
  );
};
