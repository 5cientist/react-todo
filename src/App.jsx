/* eslint-disable react/jsx-key */
import { useState } from 'react';
import './App.css';
import { Task } from './Task'

function App() {
  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState('')

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    // const newTodoList = [...todoList,newTask]
    // setTodoList(newTodoList)
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    }
    setTodoList([...todoList, task])

  }

  const deleteTask = (id) => {
    // const newTodoList = todoList.filter((task)=>{
    //   if (task === taskToDeleteName){
    //     return false;
    //   }else {
    //     return true;
    //   }

    // })
    // setTodoList(newTodoList)

    setTodoList(todoList.filter((task) => task.id !== id))


  }

  const completedTask = (id) => {
    setTodoList(todoList.map((task) => {
      if (task.id === id) {
        return { ...task, completed: true };

      } else {
        return task;
      }
    }))
  }
  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <Task taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completedTask={completedTask}
            />
          )

        })}

      </div>

    </div>

  )
}


// https://www.youtube.com/watch?v=omphzcP6wf4&list=PLpPqplz6dKxW5ZfERUPoYTtNUNvrEebAR&index=6

export default App