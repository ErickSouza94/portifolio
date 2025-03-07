import "./App.css";
import Header from "./components/Header";
import About from "./pages/HomePage/About/About";
import Connect from "./pages/HomePage/Connect/Connect";
import Home from "./pages/HomePage/Index";
import Projects from "./pages/HomePage/Projects/Projects";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Projects />
      <About />
      <Connect />
    </>
  );
}

export default App;
