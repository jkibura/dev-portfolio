import React from 'react'
import styles from '../styles/Projects.module.css'
import projects from '../data/projects'

import SectionHeader from './ui/SectionHeader'
import ProjectCard from './ui/ProjectCard'

const Projects = () => {
const accent = 'MY WORK'
const title = 'Featured Projects'

  return (
    <section id="projects" className='container'>
      <SectionHeader accent={accent} title={title}/>
      <p className={`body-text ${styles.lead}`}>A selection of things I've built</p>

      <div className={styles.projects}>
        {projects.map((project) => (
          <ProjectCard 
            key={project.id}
            image={project.image}
            name={project.name}
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