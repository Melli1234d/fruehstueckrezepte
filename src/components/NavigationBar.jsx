// NavigationBar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../components/UI/scss/components/NavigationBar.scss'
import Rezeptsuche from "../assets/Suche.svg";
import Rezepte from "../assets/Rezepte.svg";
import Profil from "../assets/Profil.svg";
import Favorit from "../assets/Favorit.png";

const NavigationBar = () => {
  const [selectedRoute, setSelectedRoute] = useState('RezepteSuchen');

  const handleItemClick = (route) => {
    setSelectedRoute(route);
  };

  return (
    <div className="navigationbar" style={{ backgroundColor: '#8F9779' }}>
      <NavLink
        to="/RezepteSuchen"
        onClick={() => handleItemClick('RezepteSuchen')}
        style={{ textDecoration: 'none', color: selectedRoute === 'RezepteSuchen' ? 'white' : 'black' }}
      >
        <div className='fd-column'>
            <img src={Rezeptsuche} alt="Icon" height={20} width={20} style={{ textDecoration: 'none', color: selectedRoute === 'RezepteSuchen' ? 'white' : 'black' }}/>
            <div>Rezeptesuche</div>
        </div>
        
      </NavLink>

      <NavLink
        to="/Rezepte"
        onClick={() => handleItemClick('Rezepte')}
        style={{ textDecoration: 'none', color: selectedRoute === 'Rezepte' ? 'white' : 'black' }}
      >
        <div className='fd-column'>
            <img src={Rezepte} alt="Icon" height={20} width={20} />
            <div>Rezepte</div>
        </div>
       
      </NavLink>

      <NavLink
        to="/Favoriten"
        onClick={() => handleItemClick('Favoriten')}
        style={{ textDecoration: 'none', color: selectedRoute === 'Favoriten' ? 'white' : 'black' }}
      >
        <div className='fd-column'>
       <img src={Favorit} alt="Icon" height={20} width={20} />
        <div>Favoriten</div>
        </div>
      </NavLink>

      <NavLink
        to="/Login"
        onClick={() => handleItemClick('Login')}
        style={{ textDecoration: 'none', color: selectedRoute === 'Login' ? 'white' : 'black' }}
      >
        <div className='fd-column'>
            <img src={Profil} alt="Icon" height={20} width={20} />
            <div>Login</div>
        </div>
        
      </NavLink>
    </div>
  );
};

export default NavigationBar;
