import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span className={styles.text}>Built with ❤️ in 🇦🇺</span>
      </div>
    </footer>
  )
}