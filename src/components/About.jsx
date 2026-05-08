import React from 'react'
import '../styles/globals.css'
import styles from '../styles/About.module.css'
import profileImage from '../assets/images/about.png'

import SectionHeader from './ui/SectionHeader'

const About = () => {
  const accent = 'WHO I AM'
  const title = 'About Me'

  return (
    <section className='container'>
      <SectionHeader accent={accent} title={title}/>

      <div className={styles.about}>
        <div className={styles.avatarWrapper}>
          <img className={styles.avatar} src={profileImage} alt="my photo" />
          <div className={styles.avatarGlow}></div>
        </div>
          
        <div className={styles.content}>
          <p className={styles.bio}>
              I'm a software engineer with a love for clean architecture and
              thoughtful UI. After years building enterprise systems, I returned
              to hands-on coding to sharpen my craft — one project at a time.
              I care about the intersection of engineering rigour and beautiful
              user experience.
            </p>

            <p className={styles.bio}>
              When I'm not writing code, I'm reading about systems design,
              contributing to open source, or mentoring junior developers in
              my community.
            </p>
        </div>
        
      </div>

    </section>
  )
}

export default About