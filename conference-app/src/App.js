import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Conferences from './pages/Conferences';
import Weather from './pages/Weather';
import ConferenceDetails from './components/ConferenceDetails';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/conferences" element={<Conferences />} />
          <Route path="/conferences/:id" element={<ConferenceDetails />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;