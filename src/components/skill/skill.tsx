import Image from "next/image";

import star from "./star.png";
import styles from "./skill.module.css";

interface props {
  src: string;
  stars: number;
  skill: string;
}

export default function Skill(props: props) {
  return (
    <div className={styles.skill}>
      <div className={styles.container}>
        <Image src={props.src} alt="Skill" width="60" height="60" />

        <div className={styles.content}>
          <h4 className={styles.heading}>{props.skill}</h4>

          {[...Array(props.stars)].map((i, key) => {
            return (
              <Image
                className={styles.star}
                src={star}
                alt="Star"
                key={key}
                width="15"
                height="15"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
