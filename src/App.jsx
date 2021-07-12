import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import {BrowserRouter as Router, Route} from "react-router-dom"
import axios from 'axios';

import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import './App.css';
import Header from './components/Header';
import TaskDetails from './components/TaskDetails';


const App = () =>{
  //lista de tasks estáticas
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false
    },
    {
      id: '2',
      title: 'ouvir',
      completed: true,
      info: 'Massa'
    }

  ]);

  //função a ser chamada quando a página for renderizada pela primeira vez 
  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.cypress.io/todos?_limit=10'
      )
      setTasks(data)
    }

    fetchTasks();
    
  }, [])


  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return {...task, completed: !task.completed}
      return task;
    });

    setTasks(newTasks)
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false
    }];

    setTasks(newTasks)
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }

  return( 
    <Router>
    <div className="container">
      <Header />
      <Route path="/" exact render={(() => (
        <>
          <AddTask handleTaskAddition={handleTaskAddition} />
          <Tasks tasks={tasks} handleTaskClick={handleTaskClick}  handleTaskDeletion = {handleTaskDeletion}/>
        </>
      ))}></Route>
      <Route path="/:taskTitle" exact component={TaskDetails}></Route>

    </div>
    </Router> 
  )  
}


export default App;