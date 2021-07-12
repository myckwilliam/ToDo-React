import React from 'react';
import Button from './Button'
import { useHistory, useParams } from 'react-router-dom';

import './TaskDetails.css'

const TaskDetails = () => {

    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }

    return ( 
       <>
        <div className="back-button-container">
            <Button onClick={handleBackButtonClick}>Voltar</Button>
        </div>
        <div className="task-details-container">
            <p className="title">{params.taskTitle}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi vel in aperiam asperiores nam iusto.</p>   
        </div>
       </> 
     );
}
 
export default TaskDetails;