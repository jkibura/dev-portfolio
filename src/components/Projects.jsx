import React from 'react'
import '../styles/globals.css'
import styles from '../styles/Projects.module.css'
import projects from '../data/projects'

import SectionHeader from './ui/SectionHeader'
import ProjectCard from './ui/ProjectCard'

const Projects = () => {
const accent = 'MY WORK'
const title = 'Featured Projects'

  return (
    <section className='container'>
      <SectionHeader accent={accent} title={title}/>
      <p className='body-text'>A selection of things I've built</p>

      <div className={styles.projects}>
        {projects.map((project) => (
          <ProjectCard 
            key={project.id}
            image={project.image}
            title={project.name}
            description={project.description}
            tags={project.tags}
            link={project.link}
            />
        ))}
      </div>
      
    </section>
  )
}

export default Projects