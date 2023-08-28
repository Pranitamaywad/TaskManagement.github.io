import {useState} from "react";
import './form.css';

const Form=({setTasks})=>{
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredDescript, setEnteredDescript] = useState("");

    const [error, setError] = useState(false)
 
    const addTask=(e)=>{
        setTasks((prevTask)=>{
            return [...prevTask,
                {
                    title: enteredTitle,
                    descrip: enteredDescript
                }] 
        });
    
        setEnteredDescript('');
        setEnteredTitle('');
    }

    const addThis=(e)=>{
        if(enteredTitle.length===0 || enteredDescript.length===0){
            setError(true)
        }
        e.preventDefault();
        (enteredDescript || enteredTitle) && addTask();
       };

    return(
        <diV className='formTask'>
             <form >
            <div className="form-group">
                <label>Task</label>
                <input type="text" className="form-control" onChange={(e)=>setEnteredTitle(e.target.value)} value={enteredTitle}/>
                {error && enteredTitle<=0? <p style={{color:"red", fontSize:"13px"}}>Field cant be empty</p>:""}
            </div>
            <div className="form-group">
                <label>Description</label>
                <input type="text" className="form-control" onChange={(e)=>setEnteredDescript(e.target.value)} value={enteredDescript}/>
                {error && enteredDescript<=0? <p style={{color:"red", fontSize:"13px"}}>Field cant be empty</p>:""}
            </div>
            <div className="form-group">
                <button className="btn btn-primary" onClick={addThis}>Add Task</button>
            </div>
      </form>
        </diV>
       
    );
}
export default Form;