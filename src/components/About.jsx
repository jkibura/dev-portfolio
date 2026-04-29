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
        <div>
          <p className="body-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nesciunt repellendus ea ullam corrupti. Numquam tempora magnam eos dolores ad tempore doloremque porro sapiente, voluptatum saepe molestiae quasi consequuntur ex!
          </p>
        </div>
      </div>

    </section>
  )
}

export default About