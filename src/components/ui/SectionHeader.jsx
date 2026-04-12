import React from 'react'
import '../../styles/globals.css'

const SectionHeader = (props) => {
  return (
    <div className='sectionHeader'>
        <span className='accent'>{props.accent}</span>
        <h3 className='section-title'>{props.title}</h3>
        <span className='header-underline'></span>
    </div>
  )
}

export default SectionHeader