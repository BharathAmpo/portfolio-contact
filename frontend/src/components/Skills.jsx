import styles from "./Skills.module.css";

function Skills() {
    return (
        <section className={styles.skills}>
            <h2 className={styles.heading}>Skills</h2>

            <ul className={styles.list}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Git</li>
            </ul>
        </section>
    );
}

export default Skills;