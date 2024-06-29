import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "../components/Navbar/Navbar";
import Home from '../pages/Home/Home';
import ResultsPage from '../pages/Results/ResultsPage';
import CompareSnkEbay from '../pages/CompareSnkrEbay/CompareSnkrEbay';
import NinjaLoader from '../components/NinjaLoader/NinjaLoader';
import Home2 from '../pages/Home2/Home2';
import Footer from '../components/Footer/Footer';
import Tooltip from '../components/Tooltip/Tooltip';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import CompareListingsPage from '../pages/CompareListingsPage/CompareListingsPage';


function App() {


  return (
    <>
    <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home2 />} />
      <Route path="/results" element={<ResultsPage />} />
      <Route path="/compare" element={<CompareSnkEbay />} />
      <Route path="/compare-listings" element={<CompareListingsPage />} />
      <Route path="/loader" element={<NinjaLoader />} />
      <Route path="/trigger" element={<Tooltip />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
