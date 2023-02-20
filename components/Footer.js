import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const handleTwitterLink = () => {
    alert('wena');

    e.preventDefault();
    const resp = window.confirm(
      'This will take you to twitter. Are you ok with that?'
    );
    if (resp) {
      window.open('https://www.twitter.com/kithkui', '_blank');
    }
  };

  return (
    <div className={styles.footer}>
      Nothing in here is directly associated with Yuga Labs. I'm just a random
      person that owns deed 60768 and is going to build something awesome in it.
      More about me on{'  '}
      <span className={styles.twitterLink} onClick={handleTwitterLink}>
        Twitter
      </span>{' '}
    </div>
  );
};

export default Footer;
