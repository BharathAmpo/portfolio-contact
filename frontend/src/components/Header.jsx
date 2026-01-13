import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.name}>Bharath Kumar Ampolu</h1>
        <p className={styles.role}>Frontend Developer</p>
      </div>
    </header>
  )
}

export default Header;