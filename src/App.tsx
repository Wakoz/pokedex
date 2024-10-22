import "./App.css";
import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";

function App() {
	const pokemonList = [
		{
			name: "Bulbasaur",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
		},
		{
			name: "Mew",
			imgSrc: "",
		},
	];
	return (
		<section> 
			<MyTitle />
			<div>
				<PokemonCard name = {pokemonList[0].name} imgSrc ={ pokemonList[0].imgSrc} />
			</div>
		</section>
	);
}

export default App;
