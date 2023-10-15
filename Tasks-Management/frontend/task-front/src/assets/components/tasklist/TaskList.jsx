import { useEffect, useState } from 'react';
import axios from 'axios';
import Task from "../task/Task"

function TaskList() {
  const user_id = 2;
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/tasklist/', {
          params: {
            user_id: user_id,
          }
        });

        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [user_id]);

    return (
      <ul id="tasks">
        {tasks.map(task => (
          <Task key={task.id} task_id={task.id} task={task.task}/>
        ))}
      </ul>
    )
}

export default TaskList