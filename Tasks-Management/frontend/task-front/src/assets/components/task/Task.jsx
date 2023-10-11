import taskBox from "./Task.module.css"
import CompleteButton from "../ui/CompleteButton/CompleteButton"

function Task({ task, task_id }) {
    return (
        <div className={taskBox}>
          <li className="task" id={`task_${task_id}`}>{task}</li>
          <CompleteButton />
        </div>
    )
}

export default Task