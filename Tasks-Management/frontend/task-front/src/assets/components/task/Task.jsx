import taskBox from "./Task.module.css"
import CompleteButton from "../ui/CompleteButton/CompleteButton"

function Task({ task_id }) {
    return (
        <div className={taskBox}>
          <li className="task" id={`task_${task_id}`}>Task {task_id}</li>
          <CompleteButton />
        </div>
    )
}

export default Task