import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import LoginPage from './components/LoginPage'; // Добавьте компонент страницы логина
import RegistrationPage from './components/RegistrationPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/registration" element={<RegistrationPage/>} />
         
      </Routes>
    </Router>
  );
};

export default App;