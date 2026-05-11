import React from 'react'
import styles from '../../styles/Projects.module.css'

const ProjectCard = ({ image, name, description, tags, link}) => {
  return (
    <a href={link}
       target='_blank'
       rel='noopener noreferrer'>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={image} alt={name} />
        </div>

        <div className={styles.body}>
          <h3 className={styles.title}>
            {name}
          </h3>
          <p className={styles.description} id='body-text'>
            {description}
          </p>

          <div className={styles.tags}>
            {tags.map((tag) => (
              <span className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>

      </div>
    </a>
  )
}

export default ProjectCard