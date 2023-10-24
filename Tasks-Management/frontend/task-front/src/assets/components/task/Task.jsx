import { useState } from 'react';
import {taskBox, taskStyle} from "./Task.module.css"

import Cookies from 'js-cookie';
import axios from 'axios';

import CompleteButton from '../ui/CompleteButton/CompleteButton';
import ModalWindow from '../modalWindow/modalWindow';
import EditTask from '../editTask/EditTask';

function Task({ task, taskId, tasks, setTasks }) {
    const token = Cookies.get("accessToken");
    const [isChecked, setChecked] = useState(false);


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

    function makeChecked() {
      setChecked(!isChecked);
    }

    const style = `${taskStyle} ${isChecked ? 'checked' : ''}`; // Adjust the class name based on your design

    return (
        <div className={taskBox}>
          <li onClick={makeChecked} className={style} id={`task_${taskId}`}>
            {task}
            <CompleteButton fnOnClick={completeTask}/>
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
          </li>
        </div>
    )
}

export default Task