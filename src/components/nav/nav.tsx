'use client';

import Link from "next/link";
import Image from "next/image";

import Section from "../section/section";

import { useTheme } from "next-themes";

import mode from "./mode.png";
import styles from "./nav.module.css";

export default function Nav() {
  const {theme, setTheme} = useTheme();

  const toggleState = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <Section className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <Link
          href="https://www.linkedin.com/in/samuel-hornsey/"
          className={styles.link}
        >
          Linkedin
        </Link>
        <Link
          href="https://github.com/SamuelHornsey"
          target="_blank"
          className={styles.link}
        >
          Github
        </Link>

        <a onClick={e => toggleState(e)} href="#" className={styles.mode}>
          <Image src={mode} alt="Mode Button" />
        </a>
      </div>
    </Section>
  );
}
