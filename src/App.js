import logo from './logo.svg';
import './App.scss';
import PrimaryButton from './components/UI/components/Buttons/PrimaryButton';
import SecondaryButton from './components/UI/components/Buttons/SecondaryButton';
import RoundButton from './components/UI/components/Buttons/Roundbutton';
import { useState, useEffect } from "react"
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


  const recipes = [
	{
	  id: 1,
	  name: "Kaiserschmarren",
	  category: "Dessert",
	},
	{
	  id: 2,
	  name: "Tomate Mozarella",
	  category: "Obst",
	},
  ]



function App() {

  //Rezept filtern -> von den Daten recipes: wird nach der Kategorie gefiltert
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [category, setCategory] = useState();

  //Setzt den Filter, durchläuft die Recipes(Daten) als recipe durch und returnt 
  useEffect(() => {
	setFilteredRecipes(
	  recipes.filter((recipe) => {
		return (
		  (!category ||
			(category === "Obst"
			  ? recipe.category === "Obst"
			  : recipe.category === "Dessert"))
		);
	  })
	);
  }, [category]);

  const clearFilters = () => {
	//Filter wieder auf Null setzen
	setCategory("");
  };

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


	  <div className="category_filter">
        <button className={`${category === "Obst" ? "selected" : ""}`}
          		onClick={() => setCategory("Obst")}
        >
			<img className="content-center eyecatcher" src={logo} alt=" Icon" height={80} width={80} />
         	<p className='category-description'>Obst</p>
        </button>
        <button className={`${category === "Dessert" ? "selected" : ""}`}
          		onClick={() => setCategory("Dessert")}
        >
			<img className="content-center eyecatcher" src={logo} alt=" Icon" height={80} width={80} />
          	<p className='category-description'> Dessert</p>
        </button>
      </div>
    	<button onClick={clearFilters}>
		Filter Löschen
	  	</button>
      <ul>
		//Wenn gefiltert wird
		{filteredRecipes.map((recipe) => {
          const { name, category, id } = recipe;
          return (
            <li key={id}>
              <div>
                Name: <strong>{name}</strong>
              </div>
              <div>Category: {category}</div>
            </li>
          );
        })}

		//Wenn nichts passendes gefunden wurde beim filtern
        {filteredRecipes.length === 0 && (
          <div>Keine Rezepte gefunden</div>
        )}
      </ul>
		</div>
	);
}

export default App;

