import React, {useState, useEffect} from 'react';


const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);
    const [pokemonurl, setPokemonurl] = useState("");

    useEffect(() => {
        fetch(pokemonurl)
          .then(response => {
            return response.json();
        }).then(response => {
            console.log(response);
            setPokemon(response.results);
        }).catch(err=>{
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

export default Pokemon;