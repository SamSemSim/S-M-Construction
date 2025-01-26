import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Career from './pages/Career';
import Construction from './pages/sectors/Construction';
import Energy from './pages/sectors/Energy';
import Infrastructure from './pages/sectors/Infrastructure';
import Management from './pages/Management';
import Vision from './pages/Vision';
import Quality from './pages/Quality';
import GlobalStyle from './styles/GlobalStyle';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <Router>
          <GlobalStyle />
          <div className="App">
            <Header />
            <ThemeToggle />
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/management" element={<Management />} />
                <Route path="/vision" element={<Vision />} />
                <Route path="/quality" element={<Quality />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/career" element={<Career />} />
                <Route path="/sectors/construction" element={<Construction />} />
                <Route path="/sectors/energy" element={<Energy />} />
                <Route path="/sectors/infrastructure" element={<Infrastructure />} />
              </Routes>
            </AnimatePresence>
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App; 