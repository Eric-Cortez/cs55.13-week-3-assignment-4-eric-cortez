import Head from 'next/head';
import Layout from '../../components/layout';
import styles from '../../styles/FirstPost.module.css';

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1 className={styles.headingAlign}>First Post</h1>
        </Layout>
    );
}