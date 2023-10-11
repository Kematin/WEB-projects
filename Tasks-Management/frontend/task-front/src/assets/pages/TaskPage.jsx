import TaskList from "../components/tasklist/TaskList"
import AddButton from "../components/ui/AddButton/AddButton"

function TaskPage() {
    return (
        <div id="task_page">
            <h1>Tasks</h1>
            <TaskList />
            <AddButton />
        </div> 
    )
}

export default TaskPage