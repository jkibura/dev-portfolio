import React from 'react'
import styles from '../styles/About.module.css'
import skills from '../data/skills'

import SectionHeader from './ui/SectionHeader'
import Tag from './ui/Tag'

const Skills = () => {
const accent = 'TOOLKIT'
const title = 'Skills & Technologies'

const doubledSkills = [...skills, ...skills]

  return (
    <section id="skills" className='container'>
      <SectionHeader accent={accent} title={title}/>
      <div className={styles.marqueWrapper}>
        <div className={styles.skills}>
          {doubledSkills.map((skill, index) => (
              <Tag 
              key={index}
              icon={skill.icon}
              size={28}
              color={skill.color}
              label={skill.name}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills