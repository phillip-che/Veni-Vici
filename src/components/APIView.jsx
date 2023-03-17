const APIView = (pokemon) => {
    console.log(pokemon)

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
                            <button className="attribute"> {capitalizeFirstLetter(pokemon.pokemon.types[0].type.name)} </button>
                            <button className="attribute"> {Math.round(pokemon.pokemon.height*3.9370078740143)} in</button>
                            <button className="attribute"> {Math.round(pokemon.pokemon.weight/4.5359237)} lbs</button>
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