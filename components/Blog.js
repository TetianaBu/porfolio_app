import Link from 'next/link';
import Date from '../components/date';
import utilStyles from './styles/Blog.module.css';
//import { getSortedPostsData } from '../lib/posts';

export default function Blog({ children }) {
  return (
    <section
      className={`${utilStyles.blogWrapper} ${utilStyles.padding1px}`}
      id="blog"
    >
      <h2>Blog</h2>
      {children}
    </section>
  );
}
