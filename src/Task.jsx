 import React from 'react';
 import './App.css';

const Task = ({task,description,deleteTask,index}) => {
    return <div className='task'>
        <div>
            <p>{task}</p>
            <span>{description}</span>
            <button onClick={()=> deleteTask(index)}>delete</button>

        </div>

       
    ;
    </div> 
    
}

export default Task;





