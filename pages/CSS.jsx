import styles from "./HTML.module.scss"
export default function CSS() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.part1}>
                <h1 className={styles.mainHeading}>Cascading Stylesheet</h1>
                <p className={styles.tagLine}>A beginner&apos;s intro to CSS, styling, animations and many more</p>
                <div className={styles.authorCont}><h1 className={styles.authorName}>Barnil Sarma</h1><h1 className={styles.date}>-28 Feb, 2024</h1></div>
            </div>
            <div className={styles.content}>
                <p className={styles.para}>
                    Ever wondered, how the cool styles, animations and transitions are applied on websites? Well, this is possible with the help of Cascading Stylesheet or CSS in short.
                </p>
                <p className={styles.para}>
                    CSS is not something which is coded inpendently. Infact it is used along with HTML to enhance the raw HTML content of the webpage.
                </p>
                <div className={styles.paraSecond}>
                    <h1 className={styles.paraheading}>CSS syntax</h1>
                    <p className={styles.paraInner}>
                        CSS syntax consists of a selector and a declaration box. The selector acts like a link to an html tag to be styled. The declaration block is where all the properties of the element are written.
                    </p>
                </div>
                <div className={styles.paraSecond}>
                    <h1 className={styles.paraheading}>CSS selectors</h1>
                    <p className={styles.paraInner}>
                        CSS selectors are used to find the elements we are looking for styling.
                    </p>
                </div>
            </div>

        </div>
    );
}