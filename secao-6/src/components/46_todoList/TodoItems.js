import React, { Component } from 'react'

function TodoItems(props){
  console.log(props)
  const deleteItem = (id) => {
    props.deleteItem(id)
  }
  return(
    <ul>
      { props.list.map((r) => 
        <li onClick={() => deleteItem(r.id)} key={r.id}>{r.name}</li>
      )}
    </ul>
  )
}

export default TodoItems