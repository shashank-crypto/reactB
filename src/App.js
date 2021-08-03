import './App.css';
import React , {useEffect , useState} from 'react'
import Recipe from "./Recipe"


function App() {

  const APP_ID = "cf740888";
  const APP_KEY = "f32945b38b8adbf02833051c74268666";

  // const ExampleQuery = `https://api.edamam.com/api/recipes/v2?type=public&q=peanut&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const [recipes , setRecipes] = useState([])
  const [search , setSearch] = useState("");
  const [query , setQuery] = useState('Peanut')

  // eslint-disable-next-line
  useEffect(() => {
    // eslint-disable-next-line
    getRecipes();
  } , [query] )

  // useEffect(fun , [])  ### When we want it to render only once (when the application mounts)

  const getRecipes = () => {
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    .then(data => data.json())
    .then(response => {
      setRecipes(response.hits)
      console.log(response.hits)
    })
  }

  const updateSearch = e => {
    setSearch(e.target.value)
    console.log(search)
  }

  const makeSearch = e => {
    e.preventDefault()
    setQuery(search)
  }

  return (
    <div className="App">
      <h1>Recipe Search App</h1>
      <form className="searchForm" onSubmit={makeSearch}>
        <input type="text" className="searchBar" value={search} onChange={updateSearch}/>
        <button  
          type="submit" 
          className="searchButton"
        >
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe,index) => (
          <Recipe key={index} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}ingredients={recipe.recipe.ingredients}/>
        ))}
      </div>
    </div>
  );
}

export default App;
