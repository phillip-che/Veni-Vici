import APIView from "./APIView"
import { useState } from 'react'
import axios from 'axios';

const MainPanel = () => {

    const [pokemon, setPokemon] = useState(null);

    const [attributes, setAttributes] = useState({
        type: "",
        height: "",
        weight: ""
      });
  
    const callAPI = async (query) => {
      await axios.get(query).then((response) => {
        setPokemon(response.data);
        // console.log(pokemon.id);
        // console.log(pokemon.name);
        // console.log(pokemon.types[0].type.name);
        // console.log(pokemon.height);
        // console.log(pokemon.weight);
      });
    }
  
    const onClick = () => {
      let pokemonID = Math.floor(Math.random() * 1010) + 1;
      let query = `https://pokeapi.co/api/v2/pokemon/${pokemonID}`;
      
      callAPI(query).catch(console.error);
    }      

    return (
        <div className="main-container">
            <h1> Veni Vici!</h1>
            <h3>Discover Pokemon from around the world!</h3>
            <APIView pokemon={pokemon} />
            <br></br>
            <button className="button" onClick={onClick}>
                Discover
            </button>
        </div>
    )
}

export default MainPanel