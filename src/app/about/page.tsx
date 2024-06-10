import Image from "next/image";
import Link from "next/link";

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
            link="https://github.com/SamuelHornsey/blog.codeordie.co"
            status={status.PROGRESS}
            name="blog.codeordie.co"
            about="Code Or Die Bloggggggg."
          />

          <Project
            link="https://github.com/SamuelHornsey/notes.samuelhornsey.com"
            status={status.COMPLETED}
            name="bad-notes-app"
            about="A really bad notes app"
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
            link="https://github.com/SamuelHornsey/javascript-router"
            status={status.COMPLETED}
            name="javascript-router"
            about="Vanilla js router"
          />
        </div>
      </Section>

      <Section className={styles.contact}>
        <div className={styles.container}>
          <h2 className={styles.heading}>Contact</h2>

          <p className={styles.text}>
            You can contact me <a className={styles.email} href="mailto:me@samuelhornsey.com">here</a> or reach out at any of the place below.
          </p>

          <ul className={styles.text}>
            <li>
              <Link className={styles.link} href="https://www.linkedin.com/in/samuel-hornsey/" target="_blank">Linkedin</Link>
            </li>
            <li>
              <Link className={styles.link} href="https://github.com/SamuelHornsey" target="_blank">Github</Link>
            </li>
            <li>
              <Link className={styles.link} href="https://twitter.com/SamHornsey" target="_blank">Twitter (X)</Link>
            </li>
            <li>
              <Link className={styles.link} href="https://www.instagram.com/sam.hornsey/" target="_blank">Instagram</Link>
            </li>
          </ul>
        </div>
      </Section>

      <Footer></Footer>
    </div>
  );
}
