import React from 'react'
import '../styles/globals.css'
import styles from '../styles/Projects.module.css'

import SectionHeader from './ui/SectionHeader'

const Projects = () => {
const accent = 'MY WORK'
const title = 'Featured Projects'

  return (
    <section className='container'>
      <SectionHeader accent={accent} title={title}/>
      <p className='body-text'>A selection of things I've built</p>

      <div >
        <div className={styles.projects}></div>
      </div>
    </section>
  )
}

export default Projects