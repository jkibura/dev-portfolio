import React from 'react'
import '../styles/globals.css'
import styles from '../styles/About.module.css'

import SectionHeader from './ui/SectionHeader'

const About = () => {
  const accent = 'WHO I AM'
  const title = 'About Me'

  return (
    <section className='container'>
      <SectionHeader accent={accent} title={title}/>

      <div className={styles.about}>
        
      </div>

    </section>
  )
}

export default About