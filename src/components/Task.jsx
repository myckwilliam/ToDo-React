import React from 'react';
import { CgClose } from 'react-icons/cg'
import { BiDetail } from 'react-icons/bi'
import { useHistory } from 'react-router-dom';

import './Task.css'


const Task = ({task, handleTaskClick ,  handleTaskDeletion}) => {

    const history = useHistory();
    const handleTaskDetailsClick = () => {
        history.push(`/${task.title}`)
    }

    return (
        
            <div className="task-container" style={task.completed ? {borderLeft: '6px solid coral'} : {}}>
                <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                    {task.title}
                </div>

                <div className="buttons-container">
                    <button className="see-task-details" onClick={handleTaskDetailsClick}><BiDetail/></button>
                    <button className="remove-task-button" onClick={() => handleTaskDeletion(task.id)}><CgClose/></button>
                    
                </div>
            </div> 

    );
}
 
export default Task;