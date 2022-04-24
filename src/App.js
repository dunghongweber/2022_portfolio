import NavBar from "./components/01_NavBar";
import About from "./components/03_About";
import Experience from "./components/04_Experience";
import Projects from "./components/05_Projects";
import Intro from "./components/02_Intro";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Intro></Intro>
      <About></About>
      <Projects></Projects>
      <Experience></Experience>
    </div>
  );
}

export default App;
