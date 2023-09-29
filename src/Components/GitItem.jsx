/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'

export const GitItem = ({title, url, id}) => {
  return (
    <div className="card">
      <img src={ url } alt={title}></img>
      <p>{ title }</p>
    </div>
  )
}

export default GitItem
