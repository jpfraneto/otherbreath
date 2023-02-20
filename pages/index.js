import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Otherbreath</title>
        <meta
          name='description'
          content='Using the breath to unleash your creative potential'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1>OTHERBREATH</h1>
      </main>
    </div>
  );
}
