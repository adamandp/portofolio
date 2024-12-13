import { Route, Routes } from "react-router";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import ProjectsPage from "../pages/ProjectsPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path ="/projects" element={<ProjectsPage />} />
    </Routes>
  );
}
