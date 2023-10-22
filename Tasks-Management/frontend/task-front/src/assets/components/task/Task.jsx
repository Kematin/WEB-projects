import { useState } from 'react';
import taskBox from "./Task.module.css"

import Cookies from 'js-cookie';
import axios from 'axios';

import Button from "../ui/Button/Button"
import ModalWindow from '../modalWindow/modalWindow';
import EditTask from '../editTask/EditTask';

function Task({ task, taskId, tasks, setTasks }) {
    const token = Cookies.get("accessToken");

    const [open, setOpen] = useState(false);
    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);
    
    async function completeTask() {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/taskchange/${taskId}/`, {
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
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      setTasks(updatedTasks)
    }

    return (
        <div className={taskBox}>
          <li className="task" id={`task_${taskId}`}>{task}</li>
          <Button fnOnClick={completeTask}/>
          <ModalWindow 
            handleClose={handleCloseModal}
            handleOpen={handleOpenModal}
            open={open}
            textForOpen="Edit"
            dataInside={<EditTask 
                          taskId={taskId} 
                          tasks={tasks}
                          setTasks={setTasks}
                          defaultValue={task}
                          handleClose={handleCloseModal}/>}/>
        </div>
    )
}

export default Task