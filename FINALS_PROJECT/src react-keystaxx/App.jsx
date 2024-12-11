import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Showcase from './pages/Showcase';
import ProductList from './pages/ProductList';
import ProductManual from './pages/ProductManual';
import CompanyProfile from './pages/CompanyProfile';
import Developer from './pages/Developer';
import EmployeeProfile from './pages/EmployeeProfile';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductManual />} />
        <Route path="/profile" element={<CompanyProfile />} />
        <Route path="/profile/:employeeId" element={<EmployeeProfile />} />
        <Route path="/developer" element={<Developer />} />
      </Routes>
    </Router>
  );
}

export default App;
