import React from 'react';
// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Header from './components/Header';
import Home from './pages/Home';
import Video from './pages/Video';

// Styles
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:videoId" element={<Video />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
