import Tasks from "./Tasks";
import './tasklist.css';

function Tasklist({ tasks, setTasks }) {
    return (
        <div className="task_list">
            
            {tasks.map(
                task => (
                    <Tasks
                        title={task.title}
                        descrip={task.descrip}
                        setTasks= {setTasks} />
                )
            )}
        </div>
    );
}
export default Tasklist;