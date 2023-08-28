import React,{useState,useEffect} from 'react';
import './App.css';

import Task from './Task.jsx';   


function Home() { 
     const [task, setTasks] = useState(
    localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : []
);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    const submit = (e) => {
        e.preventDefault();
        setTasks([...task, 
            {title,  description}])
            setTitle("");
            setDescription("");
            
             

        };

        useEffect(() => {
            localStorage.setItem("task", JSON.stringify(task));
        }, [task]);

    
    const deleteTask = (index) => {
        const filtered = task.filter((item, i) => {
            return i !== index
            });
            console.log(filtered);
            setTasks(filtered);
        };
   
return (  
        <>
            <div className="contain">
                 <h1>DAILY GOALS</h1>
                <form onSubmit={submit}>
                   
                <input type="text" placeholder="title"
                value={title}  
                onChange={(e)=> setTitle(e.target.value)} />
                <textarea placeholder="description"
                 value={description}  
                 onChange={(e)=> setDescription(e.target.value)} />

                <button type="submit">submit</button>

                </form>
                { task.map((item,value) => (
                    <Task  key={value} 
                    title={item.title}
                    description={item.description}
                    deleteTask={deleteTask}
                    index={value}  />
                ))}

                
            </div>
            
        </>
    );
                }

export default Home;
