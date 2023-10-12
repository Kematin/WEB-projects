import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./assets/pages/Register"
import Login from "./assets/pages/Login"
import TaskPage from "./assets/pages/TaskPage"
import NoPage from "./assets/pages/NoPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
