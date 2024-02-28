import styles from "./Footer.module.scss"
const Footer = () => {
    return (
        <div className={styles.GrandParent}>

            <div className={styles.ParentClass}>
                <div className={styles.leftPortion}>
                    <h3 className={styles.h3}>Made by GDSC</h3>
                    <p className={styles.p}>For the community, by the community </p>
                </div>
                <div className={styles.outerParent}>
                    <div className={styles.ResParent}>
                        <div className={styles.resources}>
                            <div>
                                <i>Resources {"\n"}</i>
                                <div>HTML</div>
                                <div>CSS</div>
                                <div>Javascript</div>
                                {/* <div>Java</div> 
                                <div>C++</div>
                                <div>Python</div>
                                <div>MongoDB</div> */}
                            </div>
                        </div>
                    </div>
                    <div className={styles.Parentcompany}>
                        <div className={styles.company}>
                            <div>
                                <i>Company</i>
                                <div>About</div>
                                <div>Blog</div>
                                <div>Contact</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.ParentTeam}>
                        <div className={styles.Team}>
                            <i>Team</i>
                            <div>Core Members</div>
                            <div>Members</div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={styles.ParentTerms}>
                <div className={styles.Terms}>
                    <div>Google Developer Students Clubs</div>
                    <div>Terms and Conditions</div>
                    <div>Privacy</div>
                </div>
            </div>
        </div>
    )
}
export default Footer;