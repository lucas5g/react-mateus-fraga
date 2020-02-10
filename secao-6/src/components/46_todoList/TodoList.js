import React, { useState } from 'react'
import TodoItems from './TodoItems'

function TodoList(){
  const [task, setTask ] = useState('')
  const [items, setItems ] = useState([])

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(task !== ''){
      let name = task
      let id = Date.now()
      items.push({id, name})
      setTask('')
    //  console.log(items)
    }
  }

  const handleClick = (id) => {
    let filterItem = items.filter( r => {
     return r.id !== id
    })

    setItems(filterItem)
  }

  return(
    <div>
      <h1>Lista de Tarefas</h1>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Nova Tarefa?"
          value={task}
          onChange={(e) => setTask(e.target.value) }
          />
        <button type="submit">Adicionar</button>
      </form>
      <TodoItems list={items} deleteItem={handleClick} />
    </div>
  )
}

export default TodoList