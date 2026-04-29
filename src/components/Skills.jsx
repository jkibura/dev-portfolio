import React from 'react'
import styles from '../styles/About.module.css'
import skills from '../data/skills'

import SectionHeader from './ui/SectionHeader'
import Tag from './ui/Tag'

const Skills = () => {
const accent = 'TOOLKIT'
const title = 'Skills & Technologies'

  return (
    <section className='container'>
      <SectionHeader accent={accent} title={title}/>
      <div className={styles.skills}>
        {skills.map((skill) => (
            <Tag 
            key={skill.id}
            label={skill.name}/>
        ))}
      </div>
    </section>
  )
}

export default Skills