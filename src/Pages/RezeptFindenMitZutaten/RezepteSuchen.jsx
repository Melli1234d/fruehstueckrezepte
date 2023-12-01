import React, { useState } from 'react';
import PrimaryButton from "../../components/UI/components//Buttons/PrimaryButton";

//Beispielrezept
const exampleRecipe = {
  name: 'Kaiserschmarren',
  ingredients: [
    { name: 'Eier', unit: 'Stück', quantity: 2 },
    { name: 'Vanillezucker', unit: 'Packung', quantity: 1 },
    { name: 'Dinkelmehl', unit: 'g', quantity: 95 },
    { name: 'Zucker', unit: 'EL', quantity: 2 },
    { name: 'Milch', unit: 'ml', quantity: 135 },
  ],
};

// Allgemeine Zutatenliste
const allIngredientsList = [
    { name: 'Eier', image: 'egg.jpg' },
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
  
    const updatedIngredients = [
      ...addedIngredients,
      { ...selectedIngredient, quantity },
    ];
    setAddedIngredients(updatedIngredients);
    setSelectedIngredient(null);
    setCurrentStep(2);
    setSearchQuery('');
  };

  const removeIngredient = (index) => {
    const updatedIngredients = [...addedIngredients];
    updatedIngredients.splice(index, 1);
    setAddedIngredients(updatedIngredients);
  };

  const findRecipes = () => {
    const matchingRecipe = checkRecipe(exampleRecipe);
    setCurrentStep(5);
    if (!matchingRecipe) {
      setCurrentStep(5);
    }
  };

  const checkRecipe = (recipe) => {
    return addedIngredients.every(
      (addedIngredient) =>
        recipe.ingredients.find(
          (recipeIngredient) =>
            recipeIngredient.name === addedIngredient.name &&
            recipeIngredient.quantity >= addedIngredient.quantity
        ) !== undefined
    );
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <PrimaryButton onClick={startSearch}>
                Zutaten finden
            </PrimaryButton>
          </div>
        );
      case 2:
        return (
          <div>
            <input
              type="text"
              placeholder="Zutaten suchen"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            {searchQuery === '' && (
              <div>
                {/* Standard-Symbole */}
                {exampleRecipe.ingredients.map((ingredient) => (
                  <div key={ingredient.name} onClick={() => selectIngredient(ingredient)}>
                    <img src={ingredient.image} alt={ingredient.name} />
                    <p>{ingredient.name}</p>
                  </div>
                ))}
              </div>
            )}
            {/* Suchergebnisse */}
            <div>
              {searchResults.map((ingredient) => (
                <div key={ingredient.name} onClick={() => selectIngredient(ingredient)}>
                  <img src={ingredient.image} alt={ingredient.name} />
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
            <PrimaryButton onClick={findRecipes}>Rezept finden</PrimaryButton>
          </div>
        );
      case 5:
        return (
          <div>
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
      <h1>Rezept Suche</h1>
      {renderStep()}
    </div>
  );
};

export default RezeptSuchen;