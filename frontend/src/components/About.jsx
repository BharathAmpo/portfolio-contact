import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.about}>
      <h2 className={styles.heading}>About Me</h2>

      <p className={styles.text}>
        I am a frontend-focused developer building web interfaces using
        React and modern CSS. I focus on writing clean, structured code
        and understanding how applications are built end to end.
      </p>

      <p className={styles.text}>
        I am currently learning full-stack development with Node.js and
        MySQL, concentrating on fundamentals rather than shortcuts.
      </p>
    </section>
  );
}

export default About;
