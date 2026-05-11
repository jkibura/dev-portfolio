import React from 'react'
import '../../styles/globals.css'



const Tag = ( {label, icon, size, color} ) => {
  const Icon = icon
  return (
    <div className="tag">
        <Icon size={size} color={color}/>
        <span>{label}</span>
    </div>
  )
}

export default Tag