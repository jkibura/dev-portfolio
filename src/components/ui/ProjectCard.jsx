import React from 'react'
import styles from '../../styles/Projects.module.css'

const ProjectCard = ({ image, title, description, tags, link}) => {
  return (
    <a href={link}
       target='_blank'
       rel='noopener noreferrer'>
      <div className={styles.card}>
        <div className={styles.imageHolder}>
          <img className={styles.image}src={image} alt={name} />
        </div>

        <h4 className={styles.cardTitle}>
          {title}
        </h4>
        <p className={styles.cardDescription} id='body-text'>
          {description}
        </p>

        <div className={styles.cardTags}>
          {tags.map((tag) => (
            <span className={styles.tag}>{tag}</span>
          ))}
        </div>

      </div>
    </a>
  )
}

export default ProjectCard