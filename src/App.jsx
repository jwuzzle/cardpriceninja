import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "../components/Navbar/Navbar";
import Home from '../pages/Home/Home';
import ResultsPage from '../pages/Results/ResultsPage';
import CompareSnkEbay from '../pages/CompareSnkrEbay/CompareSnkrEbay';


function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/results" element={<ResultsPage />} />
      <Route path="/compare" element={<CompareSnkEbay />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
