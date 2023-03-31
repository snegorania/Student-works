import "./App.css";
import WorkPage from "./features/student/Components/WorkPage";
import { Routes, Route } from "react-router-dom";
import { fillStorage } from "./app/fillStorage";
import { useEffect } from "react";
import Layout from "./app/Layout";
import TablePage from "./features/student/Components/TablePage";

function App() {
  useEffect(() => {
    if (localStorage.getItem("students") === null) {
      fillStorage();
    }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TablePage />} />
        <Route path="element/:id" element={<WorkPage />} />
      </Route>
    </Routes>
  );
}

export default App;
