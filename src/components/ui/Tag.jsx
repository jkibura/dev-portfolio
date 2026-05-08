import React from 'react'
import '../../styles/globals.css'



const Tag = ( {label} ) => {
  return (
    <div className="tag">
        {/* <div>
          <img src="" alt={label} />
        </div> */}
        <span>{label}</span>
    </div>
  )
}

export default Tag