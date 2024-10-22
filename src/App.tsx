import "./App.css";
import { useState } from "react";
import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/Navbar";


function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
	
  const pokemonList = [
		{
			name: "Bulbasaur",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
		},
    {
      name: "Charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "Squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "Pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
			name: "Mew",
			imgSrc: "",
		}

    
	];
  const handlePrevious = () => {
    setPokemonIndex((prevIndex) => 
    prevIndex === 0 ? prevIndex : prevIndex - 1
  );
  };

  const handleNext = () => {
    setPokemonIndex ((prevIndex) =>
    prevIndex === pokemonList.length - 1 ? prevIndex : prevIndex + 1
  );
  };
	return (
		<section> 
			<MyTitle />
			<div>
				<PokemonCard name = {pokemonList[pokemonIndex].name} imgSrc ={ pokemonList[pokemonIndex].imgSrc} />
      </div>
      <div>
        <NavBar handlePrevious = {handlePrevious} handleNext = {handleNext} />
      </div>
		</section>
  );
}

export default App;
