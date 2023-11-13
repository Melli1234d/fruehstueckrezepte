import logo from './logo.svg';
import './App.scss';
import PrimaryButton from './components/UI/components/Buttons/PrimaryButton';
import SecondaryButton from './components/UI/components/Buttons/SecondaryButton';
import RoundButton from './components/UI/components/Buttons/Roundbutton';
import { useState, useEffect } from "react"
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


const RecipeList = ({ recipes }) => {
	return (
	  <ul>
		{recipes.map((recipe) => {
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
	  </ul>
	);
  };
  
  const CategoryButton = ({ selectedCategory, category, onClick, logo, description }) => {
	return (
	  <button className={`${selectedCategory === category ? "selected" : ""}`} onClick={() => onClick(category)}>
		<img className="content-center eyecatcher" src={logo} alt="Icon" height={80} width={80} />
		<p className='category-description'>{description}</p>
	  </button>
	);
  };
  
  const App = () => {
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
	];
  
	const [filteredRecipes, setFilteredRecipes] = useState(recipes);
	const [category, setCategory] = useState('');
  
	useEffect(() => {
	  setFilteredRecipes(
		recipes.filter((recipe) => !category || (category === "Obst" ? recipe.category === "Obst" : recipe.category === "Dessert"))
	  );
	}, [category]);
  
	const clearFilters = () => {
	  setCategory('');
	};
  
	return (
	  <div className="App">
		<div className="category_filter">
		  <CategoryButton
			selectedCategory={category}
			category="Obst"
			onClick={setCategory}
			logo={logo}
			description="Obst"
		  />
		  <CategoryButton
			selectedCategory={category}
			category="Dessert"
			onClick={setCategory}
			logo={logo}
			description="Dessert"
		  />
		</div>
		<button onClick={clearFilters}>Filter Löschen</button>
		{filteredRecipes.length === 0 ? (
		  <div>Keine Rezepte gefunden</div>
		) : (
		  <RecipeList recipes={filteredRecipes} />
		)}
	  </div>
	);
  };
  
  export default App;
