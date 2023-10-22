import { useState } from "react"

import Cookies from 'js-cookie';
import axios from 'axios';

import Input from "../ui/Input/Input"

function EditTask({ taskId, tasks, setTasks, defaultValue, handleClose }) {
    const token = Cookies.get("accessToken");
    const [updatedTask, setUpdatedTask] = useState(defaultValue)

    async function editTask() {
      try {
        await axios.put(`http://127.0.0.1:8000/api/taskchange/${taskId}/`,
        { task: updatedTask },
        { headers: {
            Authorization: `JWT ${token}`
        }});
        editTaskState()
        handleClose()
      } catch (error) {
        console.error('Error edit task:', error);
      }
    }

    function editTaskState() {
        const taskIndex = tasks.findIndex(task => task.id === taskId);

        if (taskIndex !== -1) {
            const updatedTasks = [
                ...tasks.slice(0, taskIndex),
                {"id":taskId, "task":updatedTask},
                ...tasks.slice(taskIndex + 1)
            ];
            console.log(updatedTasks);

            setTasks(updatedTasks);
        }
    }

    return (
        <div className="edit_task">
            <Input 
                label=""
                type="text"
                value={updatedTask}
                fnOnChange={(e) => {setUpdatedTask(e.target.value)}}
            />
            <button onClick={editTask}>Edit</button>
        </div>
    )
}

export default EditTask