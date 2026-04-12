import React from 'react'
import '../styles/globals.css'
import SectionHeader from './ui/SectionHeader'

const Skills = () => {
const accent = 'TOOLKIT'
const title = 'Skills & Technologies'

  return (
    <section className='container'>
      <SectionHeader accent={accent} title={title}/>
    </section>
  )
}

export default Skills