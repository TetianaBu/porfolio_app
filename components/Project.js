import styles from '../components/styles/Project.module.css';
import Image from 'next/dist/client/image';
import {allProjectsData} from '../data/allProjectsData.js';


export default function Project() {
  return (
    <div className={styles.mainWrapper}>
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
            <div className={styles.textWrapper}>
              <h4 className={styles.title}>{title}</h4>
              <ul className={styles.stackWrapper}>
                <li>{stack1}</li>
                <li>{stack2}</li>
                <li>{stack3}</li>
                <li>{stack4}</li>
                <li>{stack5}</li>
              </ul>
              <p className={styles.decription}>{description}</p>
            </div>
            <div className={styles.socialImagesWrapper}>
              <a href={linkGit} className={styles.socialImgWrapper}>
                <Image
                  priority
                  src={imgGit}
                  className={styles.socialImg}
                  width="12px"
                  height="12px"
                  alt="social"
                />
              </a>
              <a href={linkWeb} className={styles.socialImgWrapper}>
                <Image
                  priority
                  src={imgWeb}
                  className={styles.socialImg}
                  width="12px"
                  height="12px"
                  alt="social"
                />{' '}
              </a>
            </div>
          </article>
        )
      )}
    </div>
  );
}
