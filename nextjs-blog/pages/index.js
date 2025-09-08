import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/Home.module.css'
import Link from 'next/link';


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={`${styles.introText} ${styles.bgColor}`}>
          Hello, I'm Eric. I'm a software engineer with over 4 years of experience in the tech industry.
          I enjoy building dynamic, scalable applications that are intuitive and user-friendly.
          My passion lies in solving complex problems, learning new technologies, and collaborating with others to create impactful software solutions.
          In my free time, I like exploring new programming languages and contributing to open source projects.
        </p>
        <p className={styles.secondaryText}>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section>
        <h2 className={styles.headingAlign}>Posts</h2>
        <div className={styles.postCard}>
          <Link href="/posts/first-post" className={styles.postLink}>First Post</Link>
        </div>

      </section>

    </Layout>
  );
}