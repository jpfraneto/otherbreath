import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  const handleJoin = e => {
    e.preventDefault();
    const resp = window.confirm(
      'This will take you to a google form. Are you ok with that?'
    );
    if (resp) {
      window.open('https://forms.gle/78o6KTQTwXVqG8hp6', '_blank');
    }
  };
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
        <div className={styles.navTop}>
          {' '}
          <h1>OTHERBREATH</h1>
          <h2>Ignite your creative spark.</h2>
        </div>
        <div className={styles.copyContainer}>
          {' '}
          <p>
            Our first journey starts this wednesday. This is how it will look
            like:
          </p>
          <div className={styles.imageContainer}>
            <Image
              src='/images/breathworksession.png'
              alt='Zoom meeting'
              fill
            />
          </div>
          <p>
            You may judge that as child-like. That's the rational aspect of your
            mind, trying to control the situation and find in it something
            familiar. This adventure is an invitation into the non-familiar.
          </p>
          <p>
            We are going to tap into those dreams of childhood, into the way on
            which these cartoons made you <em>feel</em>. Into what they brought
            into you as you were growing up.
          </p>
          <p>
            That is the power of stories, because at the end of the day, the
            creative act is a way of making sense.{' '}
          </p>
          <div className={styles.btnsContainer}>
            <Link href='/breathwork'>About Breathwork</Link>
            <a onClick={handleJoin}>Join</a>
          </div>
        </div>
      </main>
    </div>
  );
}
