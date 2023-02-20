import React from 'react';
import Head from 'next/head';
import styles from '../styles/About.module.css';
import Link from 'next/link';

const Breathwork = () => {
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
          <p>
            The session will last for 1 hour. You will get in, I will frame the
            instructions, and then we'll go into an active phase of breathing
            for 30 minutes. I will send you instructions to prepare for this via
            email if you sign up.
          </p>
          <p>
            After that active breath, we'll have 15 minutes of integration, and
            then a short space for sharing.
          </p>
          <p>
            The important part of this process is showing up, giving your best,
            and allowing what wants to happen to happen. This is the first
            exploration into building something in the{' '}
            <a
              href='https://www.otherside.xyz'
              target='_blank'
              style={{ color: 'yellow' }}
            >
              Otherside
            </a>
            . We don't have access to that world yet, but we can go there with
            our minds. We can imagine that we are there. I will guide you
            through that.
          </p>

          <div className={styles.btnsContainer}>
            <Link href='/'>Back</Link>
            <a onClick={handleJoin}>Join</a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Breathwork;
