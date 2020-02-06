import React, { useState } from 'react'


function TodoList(){
  const [task, setTask ] = useState('')

  return(
    <div>
      <h1>Lista de Tarefas</h1>
      <form>
        <input 
          placeholder="Nova Tarefa?"
          value={task}
          onChange={(e) => setTask(e.target.value) }
          />
      </form>

      {task}
    </div>
  )
}

export default TodoList