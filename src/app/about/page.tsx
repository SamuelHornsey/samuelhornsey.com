import Nav from "../../components/nav/nav";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Nav></Nav>
      About
    </div>
  );
}
