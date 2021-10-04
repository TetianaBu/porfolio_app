import styles from '../components/styles/Skills.module.css';
import SkillsGrid from './SkillsGrid';

export default function Skills() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.skillsText}>
        <article>
          <h3>Skills</h3>
          <p>
            The primary tools that I use are React and Next.JS. Besides that,
            I’m interested in exploring other JavaScript libraries/frameworks.
            Apart from Front-End, I have a general understanding of Node.js and
            Express.js. For styling, I mostly rely on CSS3, but I’m familiar
            with SASS and CSS-in-JS as well. I continuously improve my skills,
            and here are the most recent courses I’ve taken:
          </p>
          <ul className={styles.certificatesList}>
            <li>
              <a href="/JustJavaScript.pdf" className={styles.certificatesLink}>
                <small>Just JavaScript, Den Abramov</small>
              </a>
            </li>
            <li>
              <a href="https://advancedreact.com/">
                <small>Fullstack Advanced React&GraphQL, Wes Bos</small>
              </a>
            </li>
            <li>
              <a href="https://www.coursera.org/account/accomplishments/certificate/P386S2EBGFWV">
                <small>Intro to Cloud Computing, IBM</small>
              </a>
            </li>
            <li>
              <a href="https://www.coursera.org/account/accomplishments/certificate/MWXPWCZTB5XT">
                <small>
                  Intro to Cloud Development with HTML, CSS and JavaScript, IBM
                </small>
              </a>
            </li>
            <li>
              <a href="https://www.coursera.org/account/accomplishments/certificate/YMFXXFGKUSK2">
                <small>Developing Cloud Native Applications, IBM</small>
              </a>
            </li>
            <li>
              <a href="https://coursera.org/share/66dfc539702c2a690a1ff0925edc0339">
                <small>
                  Intro to Containers w/ Docker, Kubernetes and OpenShift, IBM
                </small>
              </a>
            </li>
            <li>
              <a href="https://coursera.org/verify/HJXWAF7QKFNC">
                <small>Developing Cloud Apps with Node.js and React, IBM</small>
              </a>
            </li>
            <li>
              <a href="https://app.diplomasafe.com/pl-PL/diploma/d910d8fdd3d32f264f7bc85b947563dd6bbf4570c/python-od-podstaw">
                <small>Computer Programming: Python, SDA</small>
              </a>
            </li>
          </ul>
        </article>
      </div>
      <SkillsGrid />
    </section>
  );
}
