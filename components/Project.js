import styles from '../components/styles/Project.module.css';
import Image from 'next/dist/client/image';
import { allProjectsData } from '../data/allProjectsData.js';

export default function Project() {
  return (
    <>
      {allProjectsData.map(
        ({
          id,
          title,
          description,
          stack1,
          stack2,
          stack3,
          stack4,
          stack5,
          linkGit,
          linkWeb,
          imgGit,
          imgWeb
        }) => (
          <article key={id} className={styles.unit}>
            <h2 className={styles.number}>0{id}</h2>
            <div className={styles.textWrapper}>
              <h3 className={styles.title}>{title}</h3>
              <ul className={styles.stackWrapper}>
                <li>{stack1}</li>
                <li>{stack2}</li>
                <li>{stack3}</li>
                <li>{stack4}</li>
                <li>{stack5}</li>
              </ul>
              <p className={styles.decription}>{description}</p>
              <div className={styles.socialImagesWrapper}>
              <a
                href={linkGit}
                type="button"
                className={styles.socialImgWrapper}
              >
                Code
              </a>
              <a
                href={linkWeb}
                type="button"
                className={styles.socialImgWrapper}
              >
                Web
              </a>
            </div>
            </div>

          </article>
        )
      )}
    </>
  );
}
