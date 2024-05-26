import { ReactNode } from "react";

import styles from './section.module.css';

interface props {
  children: ReactNode,
  className?: string
}

export default function Section({ children, className = '' }: Readonly<props>) {
  return (
    <section className={className}>
      <div className={styles.container}>
        {children}
      </div>
    </section>
  )
}

