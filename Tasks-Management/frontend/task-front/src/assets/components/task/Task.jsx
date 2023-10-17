import { useNavigate } from 'react-router-dom';

import Cookies from 'js-cookie';
import axios from 'axios';

import taskBox from "./Task.module.css"
import CompleteButton from "../ui/CompleteButton/CompleteButton"

function Task({ task, task_id, tasks, setTasks }) {
    const token = Cookies.get("accessToken");
    
    async function completeTask() {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/taskchange/${task_id}`, {
          headers: {
            Authorization: `JWT ${token}`
          }
        });
        deleteTaskFromState()
      } catch (error) {
        console.error('Error delete task:', error);
      }
    }

    function deleteTaskFromState() {
      const updatedTasks = tasks.filter(task => task.id !== task_id);
      setTasks(updatedTasks)
    }

    return (
        <div className={taskBox}>
          <li className="task" id={`task_${task_id}`}>{task}</li>
          <CompleteButton fnOnClick={completeTask}/>
        </div>
    )
}

export default Task