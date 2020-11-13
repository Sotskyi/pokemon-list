import React, { useState, useEffect } from "react";

import { PokemonCard } from "./components/pokemon-card";
import { BemPrefix } from "./utils/bem";
import { ControlledOpenSelect } from "./components/select/";
import typeColor from "./utils/types-color";

import "./App.scss";

const bem = BemPrefix("App");

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [copyPokemonData, setCopyPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pokemonPerPage, setPokemonPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchByTypes, setSearchByTypes] = useState([]);

  useEffect(() => {
    const getPokemonData = async () => {
      setLoading(true);

      let fetchData = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${pokemonPerPage}`
      );

      let response = await fetchData.json();
      let allPokemonData = await getAdditionalInfromation(response.results);

      setPokemonData(allPokemonData);
      setCopyPokemonData(allPokemonData);
      setLoading(false);
    };

    getPokemonData();
  }, [pokemonPerPage]);

  const getAdditionalInfromation = async (data) => {
    return Promise.all(
      data.map(async (pokemon) => {
        let response = await fetch(pokemon.url);

        return response.json();
      })
    );
  };

  useEffect(() => {
    if (searchTerm.length === 0 && searchByTypes.length > 0) {
      return;
    } else if (searchTerm.length === 0 && searchByTypes.length === 0) {
      setPokemonData(copyPokemonData);
    } else if (searchTerm.length > 0) {
      const results = copyPokemonData.filter((pokemon) =>
        pokemon.name.includes(searchTerm.toLowerCase())
      );

      setPokemonData(results);
    } else return;
  }, [searchTerm]);

  useEffect(() => {
    if (searchByTypes.lentgh === 0 && searchTerm.length > 0) {
      return;
    } else if (searchTerm.length === 0 && searchByTypes.length === 0) {
      setPokemonData(copyPokemonData);
    } else if (searchByTypes.length > 0) {
      const containsAny = (source, target) => {
        let result = source.filter(function (item) {
          return target.indexOf(item) > -1;
        });

        return result.length > 0;
      };

      const results = copyPokemonData.filter((pokemon) => {
        const pokemonTypes = pokemon.types.map((elem) => elem.type.name);

        return containsAny(pokemonTypes, searchByTypes);
      });

      setPokemonData(results);
    } else return;
  }, [searchByTypes]);

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const clickOnType = (e) => {
    if (searchByTypes.includes(e.target.id)) {
      return;
    }
    setSearchByTypes([...searchByTypes, e.target.id]);
  };

  const deleteType = (e) => {
    const results = searchByTypes.filter((type) => type !== e.target.id);
    setSearchByTypes(results);
  };

  return (
    <div className={bem()}>
      <div className={bem("nav-bar")}>
        <input
          onChange={handleSearchInput}
          value={searchTerm}
          placeholder={"search by name"}
          className={bem("input")}
        ></input>
        <ControlledOpenSelect
          setPokemonPerPage={setPokemonPerPage}
          setSearchTerm={setSearchTerm}
          setSearchByTypes={setSearchByTypes}
        />
        <div className={bem("search-by-types")}>
          click on types for search by type
          {searchByTypes.map((elem, i) => (
            <span
              onClick={deleteType}
              style={{ backgroundColor: typeColor[elem] }}
              id={elem}
              key={i}
            >
              {elem}
            </span>
          ))}
        </div>
      </div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {pokemonData.map((pokemon) => {
            return (
              <PokemonCard
                clickOnType={clickOnType}
                key={pokemon.name}
                pokemon={pokemon}
              />
            );
          })}
        </>
      )}
    </div>
  );
}

export default App;
