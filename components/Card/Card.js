import Link from "next/link";
import { Icon } from "@iconify/react";
import styles from "./Card.module.scss";

export const Card = ({ icon, title, to = "" }) => {
  return (
    <Link href={to} target="_blank" title={title} className={styles.card}>
      <Icon icon={icon} />
      <p>{title}</p>
    </Link>
  );
};
