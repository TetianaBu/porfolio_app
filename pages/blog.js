import Layout from '../components/Layout';
import Link from 'next/link';
import Date from '../components/date';
import Blog from '../components/Blog';
import { getSortedPostsData } from '../lib/posts';
import styles from '../styles/blog.module.css';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

export default function BlogPages({allPostsData}) {
  return (
    <Layout>
    <Blog>
      <div className={styles.postsGrid}>
      {allPostsData.map(({ id, date, title }) => (
        <article key={id} className={styles.postGrid}>
          <div className={styles.postImg}></div>
          <Link href={`/posts/${id}`}>
            <a><h3 className={styles.postTitle}> {title}</h3></a>
          </Link>
          <small >
            <Date dateString={date} />
          </small>
        </article>
      ))}{' '}
      </div>
  </Blog>
  </Layout>
  )
}