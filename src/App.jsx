import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import MoreAbout from "./pages/About/components/MoreAbout";
import Header from "./components/Header";
import Contact from "./pages/Contact/Contact";
import MoreProjects from "./pages/MoreProjects/MoreProjects";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="more-about" element={<MoreAbout />} />
        <Route path="contact" element={<Contact />} />
        <Route path="more-projects" element={<MoreProjects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
