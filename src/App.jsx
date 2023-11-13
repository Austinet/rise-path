import {Routes, Route} from "react-router-dom"
import Dashboard from "./pages/Dashboard"

const App = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
    </Routes>
  )
}

export default App