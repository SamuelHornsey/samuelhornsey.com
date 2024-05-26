import Image from "next/image";

import Nav from "@/components/nav/nav";
import Footer from "@/components/footer/footer";
import Section from "@/components/section/section";
import Project, { status } from "@/components/project/project";

import profile from "./profile.png";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Nav></Nav>

      <Section className={styles.header}>
      <div className={styles.container}>
          <h2 className={styles.heading}>About Me</h2>

          <p className={styles.text}>
            Hi there! I'm <span className={styles.highlight}>Sam</span>, a
            Software and DevOps Engineer from Australia 🇦🇺 with 7 years of
            experience in tech. I've worked in industries like Education 🎓,
            Telecommunications 📱, and Cloud ☁️, using Python and JavaScript to
            build cool things.
          </p>
          <p className={styles.text}>
            Currently, I'm based in the UK 🇬🇧 and diving into exciting new
            projects, including this website and my blog. Take a look around to
            check out my work and skills.
          </p>
          <p className={styles.text}>"My other computer is the cloud" ☁️</p>
        </div>

        <div className={styles.container}>
          <h2 className={styles.heading}>Highlights</h2>

          <ul className={`${styles.list} ${styles.text}`}>
            <li>💻 DevOps Engineer from Australia</li>
            <li>🌐 I develop technology for the web</li>
            <li>☁️ My other computer is the cloud</li>
            <li>🏫 Learning C++, Golang and Data Science</li>
            <li>🚴‍♂️ Usually on my bike</li>
          </ul>
        </div>

        <div className={styles.container}>
          <div className={styles.profile}>
            <Image src={profile} alt="Profile" />
          </div>
        </div>
      </Section>

      <Section className={styles.projects}>
          <h2 className={styles.heading}>My Projects</h2>

          <div className={styles.grid}>
            <Project
              link="https://github.com/SamuelHornsey/samuelhornsey.com"
              status={status.PROGRESS}
              name="samuelhornsey.com"
              about="Personal Website"
            />

            <Project
              link="https://github.com/SamuelHornsey/scorm-promised"
              status={status.COMPLETED}
              name="scorm-promised"
              about="Scorm API promise wrapper"
            />

            <Project
              link="https://github.com/SamuelHornsey/fluxt"
              status={status.PROGRESS}
              name="fluxt"
              about="Python stateful streaming"
            />

            <Project
              link="https://github.com/SamuelHornsey/brutalist-notes"
              status={status.COMPLETED}
              name="brutalist-notes"
              about="A really bad notes app"
            />
          </div>
      </Section>

      <Footer></Footer>
    </div>
  );
}
