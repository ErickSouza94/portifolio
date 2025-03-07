import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage/Index";
import AllProjects from "../pages/Projects/components/AllProjects";
import About from "../pages/HomePage/About/About";
import MoreAbout from "../pages/HomePage/About/MoreAbout";

const Router = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-projects" element={<AllProjects />} />
        <Route path="/about" element={<About />} />
        <Route path="/more-about" element={<MoreAbout />} />
      </Routes>
    
  );
};

export default Router;
