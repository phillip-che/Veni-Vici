const APIView = (pokemon) => {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div>
            {pokemon.pokemon != null ? 
                (
                    <div>
                        <h2> {capitalizeFirstLetter(pokemon.pokemon.name)} </h2>
                        <li>
                            <button className="attribute"> {capitalizeFirstLetter(pokemon.attributes.type)} </button>
                            <button className="attribute"> {pokemon.attributes.height} in</button>
                            <button className="attribute"> {pokemon.attributes.weight} lbs</button>
                        </li>
                        <img className="pokemon-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokemon.id}.png`}/>
                    </div>
                ) : (
                    <div> </div>
                )   
            }
        </div>
    )
}

export default APIView