import styles from './Projects.module.css';

function Projects() {
  return (
    <section className={styles.projects}>
      <h2 className={styles.title}>Projects</h2>

      <ul className = {styles.list}>
        <li className = {styles.item}>
          <h3 className = {styles.title}>Expense Tracker</h3>
          <p className = {styles.description}>
            A frontend expense tracking application built with React to manage income and expenses using component state and local storage.
          </p>
        </li>

        <li className = {styles.item}>
          <h3 className = {styles.title}>Portfolio Website</h3>
          <p className = {styles.description}>
            A personal portfolio website built using React and CSS Modules.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Projects;