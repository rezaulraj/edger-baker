import { Routes, Route } from "react-router-dom";
import MainHome from "./pages/main/MainHome";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import JobPage from "./pages/job/JobPage";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import JobDescription from "./pages/job/JobDescription";

function App() {
  return (
    <Routes>
      {/* Main routes */}
      <Route path="/" element={<MainHome />} />

      <Route path="/" element={<Layout />}>
        <Route path="/jobs" element={<JobPage />} />
        <Route path="/b2b" element={<HomePage />} />
        <Route path="/jobs/:id" element={<JobDescription />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Catch-all route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
