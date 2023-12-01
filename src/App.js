// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Pages/Anmelden/Login";
import Registrieren from "./Pages/Anmelden/Registrieren";
import Favoriten from "./Pages/Favoriten/Favoriten";
import Rezepte from "./Pages/Rezepte/Rezepte";
import DetailRezept from "./Pages/Rezepte/DetailRezept";
import RezepteSuchen from './Pages/RezeptFindenMitZutaten/RezepteSuchen';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <Router>
      <div className="app-body">
        <Routes>
          <Route index element={<RezepteSuchen />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registrieren" element={<Registrieren />} />
          <Route path="/Favoriten" element={<Favoriten />} />
          <Route path="/Rezepte" element={<Rezepte />} />
          <Route path="/DetailRezept" element={<DetailRezept />} />
          <Route path="/RezepteSuchen" element={<RezepteSuchen />} />
        </Routes>
      </div>
	  <NavigationBar />
    </Router>
  );
}

export default App;
