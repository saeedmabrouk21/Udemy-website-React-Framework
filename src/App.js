import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import BageNotFound from "./pages/BageNotFound";
import Home from "./pages/Home";
import CoursePage from "./pages/CoursePage";
import { useSearchParams } from "react-router-dom";
function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  return (
    <div className="App">
      <div className="nav">
        <NavBar setSearch={setSearchParams}></NavBar>
      </div>
      <Routes>
        <Route path="/" element={<Home search={searchParams}></Home>} />
        <Route path="/course/:id" element={<CoursePage />} />
        <Route path="*" element={<BageNotFound />} />
      </Routes>
    </div>
  );
}
export default App;
