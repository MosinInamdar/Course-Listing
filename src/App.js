import React, { useState } from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import CourseListing from './components/CourseListingPage/CourseListing.js';
import CourseDetails from './components/CourseDetailsPage/CourseDetails.js';
import Dashboard from './components/StudentDashboard/Dashboard.js';
import Navbar from './components/Navbar/Navbar.js';
import './App.css';

const App = () => {

  return (
    <Router>
      <div className="App">
      <Navbar />
        <Routes>
        <Route exact path="/" element={<CourseListing />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
