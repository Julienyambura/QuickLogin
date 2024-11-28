import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
