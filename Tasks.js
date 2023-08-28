import  { useState } from "react";
import {FaTimes,FaThumbsUp} from "react-icons/fa";
import './task.css';

const Tasks=({title, descrip, setTasks })=>{
    const [isDone , setIsDone] = useState(false);
    const clickhandler=()=>{}   
    const deleteTask = () => {
        setTasks(prevTask => {
            const filteredTasks = prevTask.filter(task => task.title !== title);
            return filteredTasks;
        })
    };  

    return(
        <div className="card" style={{width: 32 + 'rem'}}>
        <div className="card-body">
        <span>
            <h5 className="cart-title">{title + " :"}</h5>
            <p>{descrip}</p>
            <div>
            { !isDone ? <button className='btn btn-primary' onClick={ () => setIsDone(!isDone)}>Complete</button> : null }
            {isDone ? <button className='btn btn-success' onClick={clickhandler}><FaThumbsUp/></button> : null }
                <button className='btn btn-danger' onClick={ deleteTask }><FaTimes/></button>
            </div>
        </span>
           
            </div>
        </div>
    )
}
export default Tasks;