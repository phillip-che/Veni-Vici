import APIView from "./APIView";
import { useState } from "react";
import axios from "axios";
import BanList from "./BanList";

const MainPanel = () => {
  const [pokemon, setPokemon] = useState(null);
  const [viewed, setViewed] = useState([]);
  const [banned, setBanned] = useState([]);

  const [attributes, setAttributes] = useState({
    type: "",
    height: "",
    weight: "",
  });

  const callAPI = async (query) => {
    await axios.get(query).then((response) => {
      setAttributes({
        type: response.data.types[0].type.name,
        height: Math.round(response.data.height * 3.9370078740143),
        weight: Math.round(response.data.weight / 4.5359237),
      });
      setPokemon(response.data);
    });
  };

  const filter = () => {
    
  }

  const onDiscoverClick = () => {
    let pokemonID = Math.floor(Math.random() * 1010) + 1;
    while (viewed.includes(pokemonID) || banned.includes(attributes.type) ||
            banned.includes(attributes.height) || banned.includes(attributes.weight)) {
      pokemonID = Math.floor(Math.random() * 1010) + 1;
    }
    setViewed((ids) => [...ids, pokemonID]);
    let query = `https://pokeapi.co/api/v2/pokemon/${pokemonID}`;
    callAPI(query).catch(console.error);
  };

  const onAttributeClick = (e) => {
    console.log("BANNED ATTRIBUTE")
    setBanned((attribute) => [...attribute, e.target.innerHTML]);
  }

  const removeAttribute = (e) => {
    setBanned((banList) => 
    banList.filter((attribute) => attribute != e.target.innerHTML));
  }

  return (
    <div className="main-container">
      <h1> Veni Vici!</h1>
      <h3>Discover Pokemon from around the world!</h3>
      <APIView pokemon={pokemon} attributes={attributes} onAttributeClick={onAttributeClick} />
      <br></br>
      <button className="button" onClick={onDiscoverClick}>
        Discover
      </button>
      <BanList banned={banned} onClick={removeAttribute}/>
    </div>
  );
};

export default MainPanel;
