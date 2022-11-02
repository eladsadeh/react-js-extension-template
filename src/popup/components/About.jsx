import React from 'react';
import styles from './about.module.css';

function About(props) {
   console.log(styles);
   return (
      <div className={styles.background}>
         This is the About page!
      </div>
   );
}

export default About;