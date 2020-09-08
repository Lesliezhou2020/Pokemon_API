import axios from 'axios';
import React, {useState, useEffect} from 'react';

const Pokemons = (props) => {
    const [pokemon, setPokemon] = useState([]);
    const [pokemonurl, setPokemonurl] = useState("");

    useEffect(() => {
        axios.get(pokemonurl)
            .then(response => {
                console.log(response);
                setPokemon(response.data.results);
            })
            .catch(err=>{
                console.log(err);
            });
    }, [pokemonurl]);
    
    const onClick = (e) => {
        setPokemonurl("https://pokeapi.co/api/v2/pokemon/");
    }
   
    return(
        <div>
            <button onClick={ onClick }>Fetch Pokemon</button>
            {pokemon ? pokemon.map((item, index) =>{
                return(<div key={index}>{item.name}</div>)
            }):null}
        </div>

    );
}

export default Pokemons;