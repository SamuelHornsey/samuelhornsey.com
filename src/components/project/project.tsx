import Link from "next/link";

import styles from "./project.module.css";

export enum status {
  PROGRESS = "Status: In Progress",
  COMPLETED = "Status: Completed",
  NEW = "Status: New",
}

interface props {
  name: string;
  about: string;
  status: status;
  link: string;
}

export default function Project(props: props) {
  return (
    <div className={styles.project}>
      <div className={styles.container}>
        <h4 className={styles.title}>
          <Link href={props.link} className={styles.titleLink} target="_blank">
            {props.name}
          </Link>
        </h4>
        <p className={styles.about}>{props.about}</p>
        <p className={styles.status}>{props.status}</p>
        <Link className={styles.link} href={props.link} target="_blank">
          View
        </Link>
      </div>
    </div>
  );
}
