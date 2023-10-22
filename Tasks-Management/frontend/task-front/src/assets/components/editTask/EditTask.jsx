import { useState } from "react"

import Cookies from 'js-cookie';
import axios from 'axios';

import Input from "../ui/Input/Input"

function EditTask({ taskId, defaultValue, handleClose }) {
    const token = Cookies.get("accessToken");
    const [task, setTask] = useState(defaultValue)

    async function editTask() {
      try {
        await axios.put(`http://127.0.0.1:8000/api/taskchange/${taskId}/`, {
          headers: {
            Authorization: `JWT ${token}`
          },
          data: {
            task: task
          }
        });
        handleClose()
      } catch (error) {
        console.error('Error edit task:', error);
      }
    }

    return (
        <div className="edit_task">
            <Input 
                label=""
                type="text"
                value={task}
                fnOnChange={(e) => {setTask(e.target.value)}}
            />
            <button onClick={editTask}>Edit</button>
        </div>
    )
}

export default EditTask