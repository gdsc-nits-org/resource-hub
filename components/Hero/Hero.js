import { Icon } from "@iconify/react";
import { Marquee } from "../Marquee/Marquee";
import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <div className={styles.container}>
      <Marquee>
        <Icon icon="carbon:logo-angular" />
        <Icon icon="carbon:logo-python" />
        <Icon icon="carbon:logo-github" />
        <Icon icon="carbon:logo-react" />
        <Icon icon="carbon:logo-svelte" />
        <Icon icon="carbon:logo-vue" />
        <Icon icon="carbon:watson-machine-learning" />
        <Icon icon="carbon:ibm-cloud" />
        <Icon icon="carbon:wikis" />
      </Marquee>
      <h1 className={styles.title}>Resource Hub</h1>
      <p className={styles.subtitle}>
        Your one stop collection for all things tech!
      </p>
      <Marquee reverse>
        <Icon icon="carbon:logo-angular" />
        <Icon icon="carbon:logo-python" />
        <Icon icon="carbon:logo-github" />
        <Icon icon="carbon:logo-react" />
        <Icon icon="carbon:logo-svelte" />
        <Icon icon="carbon:logo-vue" />
        <Icon icon="carbon:watson-machine-learning" />
        <Icon icon="carbon:ibm-cloud" />
        <Icon icon="carbon:wikis" />
      </Marquee>
    </div>
  );
};
