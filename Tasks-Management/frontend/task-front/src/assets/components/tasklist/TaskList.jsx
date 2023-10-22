import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Task from "../task/Task"

function TaskList() {
  const token = Cookies.get("accessToken");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/tasklist/', {
          headers: {
            Authorization: `JWT ${token}`
          }
        });

        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [token]);

    return (
      <ul id="tasks">
        {tasks.map(task => (
          <Task 
            key={task.id}
            taskId={task.id}
            task={task.task}
            tasks={tasks}
            setTasks={setTasks}/>
        ))}
      </ul>
    )
}

export default TaskList