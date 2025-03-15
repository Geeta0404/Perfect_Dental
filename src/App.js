import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Pages/Home';
import About from "./components/Pages/About";
import { BrowserRouter as Router, Link,Routes, Route } from 'react-router-dom';


function App() {
  return (
   <>
    <Router>
        <Header />
        <Routes >
        
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          
        </Routes>
    </Router>
   
   <Footer />
   </>
  );
}

export default App;
