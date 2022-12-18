import React from 'react'

export const List = (props) => {
  if (!props.freamworks || !props.freamworks.length) {
    return <h1>No data</h1>
  }
  return (
    <div>
      <ul>
         {props.freamworks.map(({id, item}) => (
          <li key={id}>{item}</li>
         ))}
      </ul>
    </div>
  )
}

export default List;
