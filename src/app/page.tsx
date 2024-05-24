import Nav from "@/components/nav/nav";
import Skill from "@/components/skill/skill";
import Footer from "@/components/footer/footer";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <Nav />
      <header className={styles.header}>
        <div className={styles.container}>
          <p className={styles.title}>Hi There! 👋</p>
          <p className={styles.title}>
            My Name is <span className={styles.purple}>Sam</span>
          </p>

          <p className={styles.content}>
            I am an experienced Software and DevOps Engineer. I love cloud,
            coding, automation and data.
          </p>
        </div>
      </header>

      <section className={styles.section}>
        <div className={styles.container}>
          <h3 className={styles.heading}>My Skills</h3>

          <div className={styles.skills}>
            <Skill
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
              stars={5}
              skill="Python Development"
            />
            <Skill
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              stars={5}
              skill="Javascript Development"
            />
            <Skill
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
              stars={4}
              skill="Typescript Development"
            />
            <Skill
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
              stars={4}
              skill="NodeJS Development"
            />
            <Skill
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              stars={4}
              skill="ReactJS"
            />
            <Skill
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
              stars={3}
              skill="NextJS"
            />
            <Skill
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
              stars={4}
              skill="Amazon Web Services"
            />
            <Skill
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"
              stars={3}
              skill="Azure"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
