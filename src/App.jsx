import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Error404 from "./pages/error";

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  )
}

export default App