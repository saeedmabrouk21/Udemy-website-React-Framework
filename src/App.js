import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BageNotFound from "./pages/BageNotFound";
import Home from "./pages/Home";
import CoursePage from "./pages/CoursePage";
import zIndex from "@mui/material/styles/zIndex";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="nav">
      <NavBar></NavBar>
      </div>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/course/:id" element={<div style={{width:'100%'}}><CoursePage style={{width:'100%'}}/></div>} />
          <Route path="*" element={<BageNotFound />} />
        </Routes>
        </div>
      </BrowserRouter>
   
  );
}
export default App;
