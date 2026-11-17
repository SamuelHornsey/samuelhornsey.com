import Image from "next/image";
import { Icon } from "@dev.icons/react/mono";

import star from "./star.png";
import styles from "./skill.module.css";

interface props {
  src: React.ReactNode;
  stars: number;
  skill: string;
}

export default function Skill(props: props) {
  return (
    <div className={styles.skill}>
      <div className={styles.container}>
        { props.src }

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
