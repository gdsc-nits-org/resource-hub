import styles from "./HTML.module.scss"
export default function HTML() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.part1}>
                <h1 className={styles.mainHeading}>HyperText Markup Language</h1>
                <p className={styles.tagLine}>A beginner's intro to HTML, TAGS, ATTRIBUTES and many more</p>
                <div className={styles.authorCont}><h1 className={styles.authorName}>Barnil Sarma</h1><h1 className={styles.date}>-28 Feb, 2024</h1></div>
            </div>
            <div className={styles.content}>
                <p className={styles.para}>
                    Wanted to start web development but did'nt know where to start?If so,this is the right place for you.
                    The first step to web development is HyperText Markup Language for HTML for short.
                </p>
                <p className={styles.para}>
                    HTML code comprises of elements or tags. There are two classes of tags namely Container Tag and Empty Tag.
                </p>
                <div className={styles.paraSecond}>
                    <h1 className={styles.paraheading}>Container Tag</h1>
                    <p className={styles.paraInner}>
                        Tags which have their corresponding closing tag are called container tags. They are basically used to impact a block of data as a whole.
                    </p>
                </div>
                <div className={styles.paraSecond}>
                    <h1 className={styles.paraheading}>Empty Tag</h1>
                    <p className={styles.paraInner}>
                        Tags which do not have their corresponding closing tags. They are basically used to impact a point of data.
                    </p>
                </div>
            </div>

        </div>
    );
}