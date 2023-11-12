import logo from './logo.svg';
import './App.css';
import PrimaryButton from './components/UI/components/Buttons/PrimaryButton';
import SecondaryButton from './components/UI/components/Buttons/SecondaryButton';
import RoundButton from './components/UI/components/Buttons/Roundbutton';

// filename app.js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
	return (
		<div className="App">
			<PrimaryButton>
				Weiter
			</PrimaryButton>
			<SecondaryButton>
				Weiter
			</SecondaryButton>
			<RoundButton>
				6
			</RoundButton>
		</div>
	);
}

export default App;

