
import React from 'react'
import { useState } from "react"
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


function App() {

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([

    {
        id:1,
        text: 'Yoga - Surya Namaskar',
        day: '30 March 2023 at 6:00 AM',
        reminder: true
    },
    {
        id:2,
        text: 'Scrum Meeting',
        day: '30 March 2023 at 7:30 AM',
        reminder: true
    },
    {
        id:3,
        text: 'Breakfast',
        day: '30 March 2023 at 8:30 AM',
        reminder: false
    },
    {
        id:4,
        text: 'Training',
        day: '30 March 2023 at 9:00 AM',
        reminder: true
    }

])


  // task reminder 
  const taskReminder = (id) => {
    console.log(id);
  }

  const onTaskReminder = (id) => {
    setTasks(
      tasks.map((task) => task.id === id ?{...task, reminder:!task.reminder}: task))
  
  }

  // add task
  const addTask = (task) => {
     const id = Math.floor(Math.random()*10000+1);
     console.log(id);

     const newTask = { id, ...task}
     setTasks([...tasks, newTask])
  }
  


  // delete task
  const deleteTask = (id) => {
    // updating the state...which excludes item whose id is passed
      setTasks(tasks.filter((task) => task.id !== id))
  }



  return (
    <div className="container">
      <Header onAdd={ () => setShowAddTask(!showAddTask)}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? 
      <Tasks 
        tasks={tasks}
        onDelete={deleteTask}
        onReminder={onTaskReminder}
       />
      : 'No Tasks Available for Today'}
    </div>
  );
}

export default App;
