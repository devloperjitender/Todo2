
import React, { useEffect, useState } from 'react'
import './App.css'
import TodoTable from './components/TodoTable'
import NewTodoForm from './components/NewTodoForm'
const initialData= ()=>{
  const data= JSON.parse(localStorage.getItem("Todos"));
  if(!data){
    return [];
  }
  else{
    return data;
  }
}
function App() {
  const[showAddTodoForm, setShowAddTodoForm]= useState(false);
  
  const [todos, setTodos] = useState(initialData)
useEffect(()=>{
  localStorage.setItem("Todos",JSON.stringify(todos))
},[todos])
  const addTodo = (assigned, description) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    }
    else {
      rowNumber = 1;
    }
    const newTodo = { rowNumber: rowNumber, rowDescription: description, rowAssign: assigned }
    setTodos(previousTodo => [...previousTodo, newTodo])


  }
  const deleteTodo = (deleteTodoRowNumber) => {
    let filteredData = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;

    });
    setTodos(filteredData);

  }



  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todos
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo={deleteTodo} />
          <button className='btn btn-primary' onClick={()=>setShowAddTodoForm(!showAddTodoForm)} >{showAddTodoForm ? 'Close New Todo':'Add Todo'}</button>
         {showAddTodoForm &&      
         <NewTodoForm addTodo={addTodo} />
         }
        </div>
      </div>
    </div>
  )
}

export default App
