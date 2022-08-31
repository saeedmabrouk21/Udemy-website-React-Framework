import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BageNotFound from "./pages/BageNotFound";
import Home from "./pages/Home";
import CoursePage from "./pages/CoursePage";
import TT from "./components/TT";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/card" element={<TT></TT>} />
          <Route path="/course:title" element={<CoursePage />} />
          <Route path="*" element={<BageNotFound />} />
        </Routes>
        </div>
      </BrowserRouter>
   
  );
}
export default App;
