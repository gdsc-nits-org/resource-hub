import styles from "./FrameSetHeaderButtons.module.scss";

const FrameSetHeaderButtons = (props) => {
    const visitResource = () => {
        window.location.href = props.dest;
    }
    return (
        <section className={styles.frameSetHeaderButtons} onClick={visitResource}>
            <div className={styles.containerHeadingSendTests}>
                {/* <textarea
                    className={styles.headingSend}
                    placeholder="Image"
                    rows={8}
                    cols={11}
                /> */}
                <div className={styles.loremipsum}>
                    <img
                        className={styles.linkIcon}
                        loading="eager"
                        alt=""
                        src={props.icon}
                    />
                    {/* <div className={styles.linkRitesh}>Virat Kohli</div> */}
                </div>
            </div>
            <div className={styles.sectionHeadingSend}>
                <div className={styles.framedivindexpageStyledDivrd}>
                    <div className={styles.headingDoyoualsoloveemail}>
                        <h1 className={styles.titleOfThe}>{props.title}</h1>
                    </div>
                    <div className={styles.frameApprovalsFeedback}>
                        <h2 className={styles.loremIpsumDolor}>
                            {props.about}
                        </h2>
                    </div>
                    <div className={styles.listItemLinkArchives}>
                        {/* <div className={styles.pricing}>
                            <button className={styles.link}>
                                <div className={styles.tag}>tag</div>
                            </button>
                            <button className={styles.link}>
                                <div className={styles.tag}>tag</div>
                            </button>
                            <button className={styles.link}>
                                <div className={styles.tag}>tag</div>
                            </button>
                        </div> */}
                        <div className={styles.creator}>
                            <h1 className={styles.author}>{props.author}</h1>
                            <h1 className={styles.linkFeb}>-{props.date}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FrameSetHeaderButtons;