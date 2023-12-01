// NavigationBar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../components/UI/scss/components/NavigationBar.scss'

const NavigationBar = () => {
  const [selectedRoute, setSelectedRoute] = useState('RezepteSuchen');

  const handleItemClick = (route) => {
    setSelectedRoute(route);
  };

  return (
    <div className="navigationbar" style={{ backgroundColor: '#8F9779', padding: '10px' }}>
      <NavLink
        to="/RezepteSuchen"
        onClick={() => handleItemClick('RezepteSuchen')}
        style={{ textDecoration: 'none', color: selectedRoute === 'RezepteSuchen' ? 'white' : 'black' }}
      >
        <div className="icon">Icon1</div>
        Rezeptesuche
      </NavLink>

      <NavLink
        to="/Rezepte"
        onClick={() => handleItemClick('Rezepte')}
        style={{ textDecoration: 'none', color: selectedRoute === 'Rezepte' ? 'white' : 'black' }}
      >
        <div className="icon">Icon2</div>
        Rezepte
      </NavLink>

      <NavLink
        to="/Favoriten"
        onClick={() => handleItemClick('Favoriten')}
        style={{ textDecoration: 'none', color: selectedRoute === 'Favoriten' ? 'white' : 'black' }}
      >
        <div className="icon">Icon3</div>
        Favoriten
      </NavLink>

      <NavLink
        to="/Login"
        onClick={() => handleItemClick('Login')}
        style={{ textDecoration: 'none', color: selectedRoute === 'Login' ? 'white' : 'black' }}
      >
        <div className="icon">Icon4</div>
        Login
      </NavLink>
    </div>
  );
};

export default NavigationBar;
