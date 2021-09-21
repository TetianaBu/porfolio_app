import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import Intro from '../components/Intro';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import utilStyles from '../styles/utils.module.css';

export default function Home() {
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
