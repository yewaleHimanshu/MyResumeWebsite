import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/about" element={<Resume />} />
                    <Route path="/experience" element={<Resume />} />
                    <Route path="/projects" element={<Resume />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/" element={<Resume />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;