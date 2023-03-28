import './App.css';
import TableData from './features/student/Components/TableData';
import WorkPage from './features/student/Components/WorkPage'
import { Routes, Route } from 'react-router-dom';
import { fillStorage } from './app/fillStorage';
import { useEffect } from 'react';

function App() {
  const filled = false
  useEffect(()=> {fillStorage()},[filled]);
  return (
    <Routes>
      <Route path="/" element={<TableData />}/>
      <Route path="/element/:id" element={<WorkPage />} />
    </Routes>
  );
}

export default App;