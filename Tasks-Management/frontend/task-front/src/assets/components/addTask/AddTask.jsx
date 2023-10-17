import { useState } from "react"

import Input from "../ui/Input/Input"

function AddTask() {
    const [task, setTask] = useState();

    return (
        <div id="add_task">
            <form action="">
                <Input
                    type="input"
                    value={task}
                    fnOnChange={(e) => setTask(e.target.value)}
                />
                <input type="submit" value="Add task" />
            </form>
        </div>
    )
}

export default AddTask