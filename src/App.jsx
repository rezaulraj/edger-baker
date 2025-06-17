import { Routes, Route } from "react-router-dom";
import MainHome from "./pages/main/MainHome";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import JobPage from "./pages/job/JobPage";
import "./App.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/job-opportunities" element={<Layout />}>
          <Route path="/job-opportunities" element={<JobPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
