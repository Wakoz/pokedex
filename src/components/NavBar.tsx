function NavBar({pokemonList, handleSelectPokemon}) {
  return (
    <div>
        {pokemonList.map((pokemon, index) => (
          <button key={index} onClick={() => handleSelectPokemon(index)}> {pokemon.name}</button>
        ))}
      </div>
  );
}
export default NavBar;