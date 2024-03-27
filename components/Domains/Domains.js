import { Card } from "../Card/Card";
import styles from "./Domains.module.scss";

export const Domains = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Domains</h1>
      <Card icon="bi:android" title="Android" to="content/web" />
      <Card icon="bi:cloud" title="Cloud" />
      <Card icon="bxl:flutter" title="Flutter" />
      <Card icon="solar:figma-linear" title="UI/UX" />
      <Card icon="bi:globe" title="Web" />
    </div>
  );
};
