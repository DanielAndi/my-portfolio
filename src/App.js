import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout.js';
import HomePage from './pages/HomePage.js'; // Ensure this import path is correct
import ProjectsPage from './pages/ProjectsPage.js';
import ResumePage from './pages/ResumePage.js';

function App() {
  return (
    <Router basename="/">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
