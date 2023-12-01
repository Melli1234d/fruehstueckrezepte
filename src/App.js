import React from 'react';
import {
	BrowserRouter,
	Route,
	Routes,
  } from 'react-router-dom'
import Login from "./Pages/Anmelden/Login";
import Registrieren from "./Pages/Anmelden/Registrieren";
import Favoriten from "./Pages/Favoriten/Favoriten";
import Rezepte from "./Pages/Rezepte/Rezepte";
import DetailRezept from "./Pages/Rezepte/DetailRezept";
import RezepteSuchen from './Pages/RezeptFindenMitZutaten/RezepteSuchen';
  
  
  
  function App() {

	return (
		<div className="app-body">
			<BrowserRouter>
				<Routes>
					<Route index element={<Login/>}/>
					<Route path="/Login" element={<Login/>}/>
					<Route path="/Registrieren" element={<Registrieren/>}/>
					<Route path="/Favoriten" element={<Favoriten/>}/>
					<Route path="/Rezepte" element={<Rezepte/>}/>
					<Route path="/DetailRezept" element={<DetailRezept/>}/>
					<Route path="/RezepteSuchen" element={<RezepteSuchen/>}/>
				</Routes>
			</BrowserRouter>
		</div>
  
	);
  }
  
  export default App;