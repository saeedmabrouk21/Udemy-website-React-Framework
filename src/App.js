import "./App.css";
import pythonJson from './data/python_res.json';
import Courses from "./components/Courses";
// import Card from "./components/Card";
function App() {
  return (
    <div className="App">
      <Courses jsonTrack={pythonJson}></Courses>
    </div>
  );
}
export default App;
