import React from 'react'

export default function Picture({imageSource, description}) {
  return (
    <div>
      <img src={imageSource} alt={description} title={description}/>
    </div>
  )
}
