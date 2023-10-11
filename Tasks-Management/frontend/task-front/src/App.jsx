import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./assets/pages/Register"
import Login from "./assets/pages/Login"
import TaskPage from "./assets/pages/TaskPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskPage />}>
        <Route path="/login" element={<Register />} />
        <Route path="/register" element={<Login />} />
        {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
