import Task from "./assets/components/task/Task"
import AddButton from "./assets/components/ui/AddButton/AddButton"

function App() {
  return (
    <div className="App">
      <h1>Tasks</h1>
      <ul id="tasks">
        <Task task_id={1} />
        <Task task_id={2} />
        <Task task_id={3} />
      </ul>
      <AddButton />
    </div>
  )
}

export default App
