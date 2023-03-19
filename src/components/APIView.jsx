const APIView = ({pokemon, attributes, onAttributeClick}) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div>
      {pokemon != null ? (
        <div>
          <h2> {capitalizeFirstLetter(pokemon.name)} </h2>
          <li>
            <button className="attribute" onClick={onAttributeClick}>
              {attributes.type}
            </button>
            <button className="attribute" onClick={onAttributeClick}>
              {attributes.height} in
            </button>
            <button className="attribute" onClick={onAttributeClick}>
              {attributes.weight} lbs
            </button>
          </li>
          <img
            className="pokemon-img"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          />
        </div>
      ) : (
        <div> </div>
      )}
    </div>
  );
};

export default APIView;
