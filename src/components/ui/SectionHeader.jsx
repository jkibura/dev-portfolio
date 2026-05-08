import React from 'react'
import '../../styles/globals.css'

const SectionHeader = (props) => {
  return (
    <div className='sectionHeader'>
        <p className='eyebrow'>{props.accent}</p>
        <h2 className='section-title'>{props.title}</h2>
        <div className='accentLine' />
    </div>
  )
}

export default SectionHeader