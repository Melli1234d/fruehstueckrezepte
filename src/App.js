import logo from './logo.svg';
import './App.scss';
import PrimaryButton from './components/UI/components/Buttons/PrimaryButton';
import SecondaryButton from './components/UI/components/Buttons/SecondaryButton';
import RoundButton from './components/UI/components/Buttons/Roundbutton';
import { useState, useEffect } from "react"
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import CategoryFilter from './components/CategoryFilter';
  
  function App () {
	return (
	  <div className="App">
		<CategoryFilter/>
	  </div>
	);
  };
  
  export default App;