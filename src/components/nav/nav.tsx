import Link from 'next/link'
import Image from 'next/image'

import mode from './mode.png';
import styles from "./nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/about" className={styles.link}>About</Link>
        <Link href="/" className={styles.link}>Blog</Link>
        <Link href="/" className={styles.link}>Github</Link>

        <Link href="/" className={styles.mode}>
          <Image src={mode} alt="Mode Button" />
        </Link>
      </div>
    </nav>
  )
}