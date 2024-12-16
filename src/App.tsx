import "./App.css";
import { useState, useEffect } from "react";
import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  useEffect(() => {
    alert("Hello pokemon trainer :)");
  }, []);

  const pokemonList = [
		{
			name: "Bulbasaur",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      className: "card-green"
		},
    {
      name: "Charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      className: "card-red"
    },
    {
      name: "Squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      className: "card-blue"  
    },
    {
      name: "Pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      className: "card-yellow"  
    },
    {
			name: "Mew",
			imgSrc: "",
      className:""
		}
	];

  const handleSelectPokemon = (index) => {
    if (pokemonList[index].name === "Pikachu"){
      alert("Pika Pikachu !!!");
    }
    setPokemonIndex(index);
  };

	return (
		<section> 
			<MyTitle />
			<div>
				<PokemonCard 
        name = {pokemonList[pokemonIndex].name} 
        imgSrc ={ pokemonList[pokemonIndex].imgSrc}
        className={pokemonList[pokemonIndex].className} />
      </div>
      <div>
        <NavBar pokemonList = {pokemonList} handleSelectPokemon = {handleSelectPokemon} />
      </div>
		</section>
  );
}
export default App;
