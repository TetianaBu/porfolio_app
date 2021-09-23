import styles from '../components/styles/Project.module.css';
import Image from 'next/dist/client/image';
import Projects from './Projects';
import html from 'remark-html';
import imgFox from '../public/images/projects/fox.png';
import imgGit from '../public/images/social/github.png';
import imgLink from '../public/images/social/link.png';

const allProjectsData = [
  {
    id: 1,
    title: `Portfolio App`,
    description: `If you have grid items that you don’t explicitly place on the grid,
    the auto-placement algorithm kicks in to automatically place the
    items. This property controls how the auto-placement algorithm
    works.`,
    img: imgFox,
    stack1: `react`,
    stack2: `next.js`,
    stack3: `css`,
    linkGit: 'https://github.com/TetianaBu/fox-app-react',
    linkWeb: 'https://github.com/TetianaBu/fox-app-react',
    imgGit: imgGit,
    imgWeb: imgLink
  },
  {
    id: 2,
    title: `Fox app`,
    description: `If you have grid items that you don’t explicitly place on the grid,
    the auto-placement algorithm kicks in to automatically place the
    items. This property controls how the auto-placement algorithm
    works.`,
    img: imgFox,
    stack1: `react`,
    stack2: `css`,
    stack3: `react-vis`,
    stack4: `mapboxgl`,
    linkGit: 'https://github.com/TetianaBu/fox-app-react',
    linkWeb: 'https://github.com/TetianaBu/fox-app-react',
    imgGit: imgGit,
    imgWeb: imgLink
  },
  {
    id: 3,
    title: `Shop`,
    description: `If you have grid items that you don’t explicitly place on the grid,
    the auto-placement algorithm kicks in to automatically place the
    items. This property controls how the auto-placement algorithm
    works.`,
    img: imgFox,
    stack1: `react`,
    stack2: `next.js`,
    stack3: `node.js`,
    stack4:  `graphql`,
    stack5:`mongodb`,
    linkGit: 'https://github.com/TetianaBu/fox-app-react',
    linkWeb: 'https://github.com/TetianaBu/fox-app-react',
    imgGit: imgGit,
    imgWeb: imgLink
  },
  {
    id: 4,
    title: `Some`,
    description: `If you have grid items that you don’t explicitly place on the grid,
    the auto-placement algorithm kicks in to automatically place the
    items. This property controls how the auto-placement algorithm
    works.`,
    img: imgFox,
    stack1: `js`,
    stack2: `css`,
    stack3: ``,
    linkGit: 'https://github.com/TetianaBu/fox-app-react',
    linkWeb: 'https://github.com/TetianaBu/fox-app-react',
    imgGit: imgGit,
    imgWeb: imgLink
  }
];

export default function Project({}) {
  return (
    <div className={styles.mainWrapper}>
      {allProjectsData.map(
        ({
          id,
          title,
          description,
          img,
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
              <div className={styles.imageWrapper}>
                <Image priority src={img} className={styles.imgMain}  layout="responsive" alt="TT" />
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
