import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
//import Blog from '../components/Blog';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Image from 'next/image';

import Intro from '../components/Intro';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Blog from '../components/Blog';
import SocialVidget from '../components/SocialVidget';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

export default function Home({ allPostsData }) {
  const name = 'Tetiana Buchok';
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <Intro />
        <Skills />
        <Projects />
        <Contact />
      <Footer />
    </Layout>
  );
}

//      <SocialVidget />

//        <About />

function ForBlog() {
  return (
    <Blog>
    <ul className={utilStyles.list}>
      {allPostsData.map(({ id, date, title }) => (
        <li className={utilStyles.listItem} key={id}>
          <Link href={`/posts/${id}`}>
            <a>{title}</a>
          </Link>
          <br />
          <small className={utilStyles.lightText}>
            <Date dateString={date} />
          </small>
        </li>
      ))}{' '}
    </ul>
  </Blog>
  )
}