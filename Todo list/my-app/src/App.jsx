import { useState } from "react";

function App(){
    const[task,setTask]=useState("");
    const[Tasks,setTasks]=useState([]);

    function addTask(){
        if(task.trim()==="")return;

        setTasks([...Tasks,task]);
        setTask("");
    }
    function deleteTask(index){
        const newTasks=Tasks.filter((t,i)=>i !== index);
        setTasks(newTasks);
    }
    return(
        <div>
            <h1>TO DO List</h1>
            <input value={task}
             onChange={(e)=>setTask(e.target.value)} />
             <button onClick={addTask} disabled={task.trim()===""}>Add</button>
             <p>Total:{Tasks.length}</p>
             <ul>{Tasks.map((t,index)=>
             <li key={index}>{t}
             <button onClick={()=>deleteTask(index)}>
                delete
             </button>
             </li>
            )}</ul>
        </div>
    );
}
export default App;