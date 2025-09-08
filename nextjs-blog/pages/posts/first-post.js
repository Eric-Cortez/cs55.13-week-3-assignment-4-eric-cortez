// Import the Head component from Next.js for managing document head elements
import Head from 'next/head';
// Import the Layout component from the layout component file
import Layout from '../../components/layout';
// Import component-specific styles from the FirstPost CSS module
import styles from '../../styles/FirstPost.module.css';

// Define and export the default FirstPost component function
export default function FirstPost() {
    // Return the JSX structure for the first post page
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1 className={styles.headingAlign}>First Post</h1>
            <div className={styles.postCard}>
                <p className={styles.postText}>
                    This is my first post on my Next.js blog! I'm excited to share my journey and experiences in web development with you all.
                    Stay tuned for more updates and insights as I continue to explore the world of Next.js and beyond.
                </p>
            </div>

        </Layout>
    );
    // End of the FirstPost component function
}
// End of the FirstPost component