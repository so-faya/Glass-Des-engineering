import './App.css';
import './index.css';
import Home from './pages/Home';
import Services from './pages/Services'; // Import the Services page
import About from './pages/About';
import Contact from './pages/Contact'
import NewsPage from './pages/NewsPage';
import Cart from './pages/Cart'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes and Route

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/About" element={<About />} />
          <Route path="/NewsPage" element={<NewsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
