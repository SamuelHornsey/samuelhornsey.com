import { Aws } from "@dev.icons/react/mono";
import {
  Python,
  Javascript,
  TypescriptIcon,
  NodejsIcon,
  _React,
  NextjsIcon,
  Ansible,
  MicrosoftAzure,
  Kubernetes,
  Go,
} from "@dev.icons/react";

import Nav from "@/components/nav/nav";
import Skill from "@/components/skill/skill";
import Footer from "@/components/footer/footer";
import Section from "@/components/section/section";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <Nav />

      <Section className={styles.header}>
        <p className={styles.title}>Hi There! 👋</p>
        <p className={styles.title}>
          My Name is <span className={styles.purple}>Sam</span>
        </p>

        <p className={styles.content}>
          I am an experienced Software and Platform Engineer. I love cloud,
          coding, automation and data.
        </p>
      </Section>

      <Section className={styles.skills}>
        <h3 className={styles.heading}>My Skills</h3>

        <div className={styles.grid}>
          <Skill
            src={<Python size={60} alt="Skill" />}
            stars={5}
            skill="Python Development"
          />
          <Skill
            src={<Javascript size={60} alt="Skill" />}
            stars={5}
            skill="Javascript Development"
          />
          <Skill
            src={<TypescriptIcon size={60} alt="Skill" />}
            stars={4}
            skill="Typescript Development"
          />
          <Skill
            src={<Go size={60} alt="Skill" />}
            stars={3}
            skill="Golang Development"
          />
          <Skill
            src={<NodejsIcon size={60} alt="Skill" />}
            stars={4}
            skill="NodeJS Development"
          />
          <Skill
            src={<_React size={60} alt="Skill" />}
            stars={4}
            skill="ReactJS"
          />
          <Skill
            src={<NextjsIcon size={60} alt="Skill" />}
            stars={3}
            skill="NextJS"
          />
          <Skill
            src={<Aws size={60} alt="Skill" />}
            stars={4}
            skill="Amazon Web Services"
          />
          <Skill
            src={<MicrosoftAzure size={60} alt="Skill" />}
            stars={3}
            skill="Azure"
          />
          <Skill
            src={<Kubernetes size={60} alt="Skill" />}
            stars={4}
            skill="Kubernetes"
          />
        </div>
      </Section>

      <Footer />
    </div>
  );
}
