// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import FreightForm from './components/FreightForm';
import FreightList from './components/FreightList';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import { AuthProvider, useAuth } from './context/AuthContext';
// import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Container maxWidth={false} disableGutters>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/freights"
              element={
                <ProtectedRoute>
                  <FreightList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/freight-register"
              element={
                <ProtectedRoute>
                  <FreightForm />
                </ProtectedRoute>
              }
            />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Container>
      </Router>
    </AuthProvider>
  );
};

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default App;
