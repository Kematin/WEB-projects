import { useState } from "react"

import axios from 'axios';
import Cookies from 'js-cookie';

import Input from "../ui/Input/Input"

function AddTask() {
    const [task, setTask] = useState("");

    async function addTask() {
        try {
            const token = Cookies.get("accessToken");
            await axios.post("http://127.0.0.1:8000/api/taskcreate/", {
                task: task
            },
            {
                headers: {
                    Authorization: `JWT ${token}`
                }
            });
        } catch (error) {
            console.error("Error while create task:", error);
        }
    } 

    return (
        <div id="add_task">
            <form onSubmit={addTask}>
                <Input
                    type="text"
                    value={task}
                    fnOnChange={(e) => setTask(e.target.value)}
                />
                <input  
                    type="submit"
                    value="Add task"
                />
            </form>
        </div>
    )
}

export default AddTask