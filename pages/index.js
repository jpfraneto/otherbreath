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
          <h3>Online breathwork center</h3>
        </div>
        <div className={styles.firstContainer}>
          <h2>We are all human</h2>
        </div>
        <div className={styles.secondContainer}>
          <div className={styles.secondContainerText}>
            <p>
              Behind each one of these cartoons there is a human being. A person
              that has found in web3 something that did not exist in the world
              before. I'm also one of those. Right now, I'm building the first
              fully digital Breathwork center, which will be located on the
              Otherside.
            </p>
            <p>
              Why there? Because I believe in the technology. A very important
              aspect of going into a breathwork session with more people happens
              when you can listen to what is happening around you. To the person
              crying next to you. Or the one laughing. That brings into the
              experience a depth that is beyond what can happen in the present
              day through zoom.{' '}
            </p>
            <p>
              If you do a group breathwork session through zoom, you can only
              listen to what the facilitator says. You are isolated in your own
              sphere with the voice of the facilitator, and I know that the
              depth of the experience can be different if there is another way
              of connecting with each other.
            </p>
            <p>
              That's the promise that the Otherside will bring, with its
              "In-world natural voice chat". I'm sure that this technology will
              be a revolution in the way on which we communicate through the
              internet, because it will bring more of what we are used to. If
              you are in the same room with other people, you can expect to
              listen all of them.
            </p>
            <p>
              So I'm going to build the Otherbreath, the first breathwork center
              of the metaverse, so that people from all over the world can dive
              into these journeys together. Stay tuned, because it will be
              incredible.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
