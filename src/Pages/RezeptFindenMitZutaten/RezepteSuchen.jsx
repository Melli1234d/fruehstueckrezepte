import React, { useState } from 'react';
import PrimaryButton from "../../components/UI/components/Buttons/PrimaryButton";
import corner from "../../assets/corner.svg";
import Eier from "../../assets/Eier.png";
import '../../App.scss'
import '../../components/UI/scss/components/RezepteSuchen.scss'
import { Popup } from 'reactjs-popup';

//Beispielrezept
const exampleRecipe = {
  name: 'Kaiserschmarren',
  ingredients: [
    { name: 'Eier', unit: 'Stück', quantity: 2, image: 'Eier.jpg' },
    { name: 'Vanillezucker', unit: 'Packung', quantity: 1, image: '../../assets/corner.svg' },
    { name: 'Dinkelmehl', unit: 'g', quantity: 95, image: '../../assets/corner.svg' },
    { name: 'Zucker', unit: 'EL', quantity: 2, image: '../../assets/corner.svg' },
    { name: 'Milch', unit: 'ml', quantity: 135, image: '../../assets/corner.svg' },
  ],
};

// Allgemeine Zutatenliste
const allIngredientsList = [
    { name: 'Eier', image: '../../assets/corner.svg' },
    { name: 'Vanillezucker', image: 'vanilla.jpg' },
    { name: 'Dinkelmehl', image: 'flour.jpg' },
    { name: 'Zucker', image: 'sugar.jpg' },
    { name: 'Milch', image: 'milk.jpg' },
    // ... Weitere Zutaten hinzufügen
  ];

const RezeptSuchen = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [addedIngredients, setAddedIngredients] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);


  //Angezeigte Zutaten
  const startSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setCurrentStep(2);
  };


  const searchIngredients = () => {
    const filteredResults = allIngredientsList.filter(
      (ingredient) =>
        ingredient.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !addedIngredients.some((added) => added.name === ingredient.name)
    );

    setSearchResults(filteredResults);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    searchIngredients();
  };

  const selectIngredient = (ingredient) => {
    setSelectedIngredient(ingredient);
    setCurrentStep(3);
  };

  const addToIngredientsList = () => {
    const quantityInput = document.getElementById('quantityInput');
    const quantity = parseFloat(quantityInput.value) || 0;
    //nur, wenn die Mengenangabe nicht leer ist
    if (quantity > 0) {
      const updatedIngredients = [
        ...addedIngredients,
        { ...selectedIngredient, quantity },
      ];
      setAddedIngredients(updatedIngredients);
      setSelectedIngredient(null);
      setCurrentStep(2);
      setSearchQuery('');
    } else {
      // Zeige eine Fehlermeldung, da keine gültige Menge eingegeben wurde
      alert('Bitte geben Sie eine gültige Menge ein.');
    }
  };

  const removeIngredient = (index) => {
    const updatedIngredients = [...addedIngredients];
    updatedIngredients.splice(index, 1);
    setAddedIngredients(updatedIngredients);
  };


  const findRecipes = () => {
    // Wenn keine Zutaten angegeben wurden, zeige eine Fehlermeldung
    if (addedIngredients.length === 0) {
      setPopupOpen(true);
    } else {
      // Überprüfe, ob ein Rezept gematcht hat
      const matchingRecipe = checkRecipe(exampleRecipe);
  
      if (matchingRecipe) {
        setCurrentStep(5);
      } else {
        // Wenn kein Rezept gefunden wurde, zeige eine Fehlermeldung oder setze den Schritt auf einen anderen Wert
        // Hier wird ein Beispiel verwendet, um einen Popup zu öffnen
        //setPopupOpen(true);
        setCurrentStep(5);
      }
    }
  };



//In dieser Version der Funktion wird überprüft, ob alle benötigten Zutaten (requiredIngredients) in der Liste der hinzugefügten Zutaten vorhanden sind und ob die Mengen ausreichen. 
//Wenn ja, gibt die Funktion true zurück, andernfalls false.
  const checkRecipe = (recipe) => {
    const requiredIngredients = recipe.ingredients.map((ingredient) => ingredient.name);
  
    return requiredIngredients.every((requiredIngredient) =>
      addedIngredients.some(
        (addedIngredient) =>
          addedIngredient.name === requiredIngredient &&
          addedIngredient.quantity >=
            recipe.ingredients.find((r) => r.name === requiredIngredient)?.quantity
      )
    );
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h1>Rezept Suche</h1>
            <p> Herzlich willkommen in deiner Küchenzauberwelt! Stehst du vor dem Vorratsschrank und suchst nach kreativen Kochideen? Tauche ein in ein köstliches Abenteuer! Ob Pancakes, Hühnchen oder eine Gemüsepfanne – finde hier das perfekte Rezept für deine Zutaten. Verwandele deine Küche in einen Ort der Genüsse und hab Spaß beim Kochen! Guten Appetit und viel Vergnügen!</p>
            <PrimaryButton onClick={startSearch}>
                Zutaten finden
            </PrimaryButton>
          </div>
        );
      case 2:
        return (
          <div>
            <h1>Zutaten finden</h1>
            <input
              type="text"
              className='search-field'
              placeholder="Zutaten suchen"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            {searchQuery === '' && (
              <div className="zutatenliste">
                {/* Standard-Symbole */}
                {exampleRecipe.ingredients.map((ingredient) => (
                  <div key={ingredient.name} onClick={() => selectIngredient(ingredient)}>
                    <img src={ingredient.image} alt={ingredient.name} height={80} width={120}/>
                    <p>{ingredient.name}</p>
                  </div>
                ))}
              </div>
            )}
            {/* Suchergebnisse */}
            <div>
              {searchResults.map((ingredient) => (
                <div key={ingredient.name} onClick={() => selectIngredient(ingredient)}>
                  <img src={ingredient.image} alt={ingredient.name} height={80} width={120}/>
                  <p>{ingredient.name}</p>
                </div>
              ))}
            </div>
            <PrimaryButton onClick={() => setCurrentStep(4)}>Weiter</PrimaryButton>
          </div>
        );
      case 3:
        return (
          <div>
            <img src={selectedIngredient.image} alt={selectedIngredient.name} />
            <div>
              <p>{selectedIngredient.name}</p>
              <p>{selectedIngredient.unit}</p>
              <input
                    type="number"
                    id="quantityInput"
                    placeholder="Menge"
              />
            </div>
            <PrimaryButton onClick={() => addToIngredientsList()}>Hinzufügen</PrimaryButton>
          </div>
        );
      case 4:
        return (
          <div>
             <h1>Rezeptsuche</h1>
            <ul>
              {addedIngredients.map((ingredient, index) => (
                <li key={index}>
                  <img src={ingredient.image} alt={ingredient.name} />
                  <p>{ingredient.name}</p>
                  <p>{ingredient.quantity}</p>
                  <button onClick={() => removeIngredient(index)}>X</button>
                </li>
              ))}
            </ul>
            {popupOpen ? (
              <Popup open={popupOpen} closeOnDocumentClick onClose={() => setPopupOpen(false)}>
                <div className="popup-content">
                  <p>Please add ingredients before searching for recipes.</p>
                  <button onClick={() => { setPopupOpen(false); setCurrentStep(2); }}>Close</button>
                </div>
              </Popup>
            ) : (
              <PrimaryButton onClick={findRecipes}>Rezept finden</PrimaryButton>
            )}
          </div>
        );
      case 5:
        return (
          <div>
             <h1>Rezepte</h1>
            {checkRecipe(exampleRecipe) ? (
              <div>
                <h2>Rezept gefunden: {exampleRecipe.name}</h2>
                <ul>
                  {exampleRecipe.ingredients.map((ingredient, index) => (
                    <li key={index}>
                      {ingredient.name}: {ingredient.quantity} {ingredient.unit}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>Leider keine passenden Rezepte gefunden</p>
            )}
          </div>
        );
      default:
        return null;
    }
  };



  return (
    <div>
      {currentStep === 1 || currentStep === 2 || currentStep === 4 || currentStep === 5 ? (
        <div className="right-corner">
          <img className="cornor-img" src={corner} alt="Icon" height={80} width={120} />
        </div>
      ) : null}
      <div className='content'>
          {renderStep()}
      </div> 
    </div>
  );
};

export default RezeptSuchen;