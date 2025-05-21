import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserInfo from "./pages/UserInfo";
import Instruction from "./pages/Instruction";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserInfo />} />
        <Route path="/Instruction" element={<Instruction />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Result" element={<Result />} />
        <Route path="#" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
