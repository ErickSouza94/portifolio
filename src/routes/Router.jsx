import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage/Index";
import AllProjects from "../pages/Projects/components/AllProjects";
import About from "../pages/About/About";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/allprojects" element={<AllProjects />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default Router;
