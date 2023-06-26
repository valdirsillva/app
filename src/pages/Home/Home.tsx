import React, { useState, useEffect, ChangeEvent, Fragment } from 'react'
import {  Pokedex } from '../../components/Pokedex/Pokedex'
import { Counter } from '../../components/Counter/Counter'
import { Header } from '../../components/Header/Header';

interface Pokemon {
  name: string;
  image: string;
}

interface Pokedex {
  id: string;
  name: string;
  image: string;
}

export function Home({name, image}: Pokemon) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  const [inputSearch, setInputSearch] = useState('')
  const [pokemonFilter, setPokemonFilter] = useState([])

  const handleInputSearch = (e: ChangeEvent<HTMLInputElement>) => {
    let pokenomName = e.target.value
    const results: any = pokemons.filter(({ name }) => {
      return name.indexOf(pokenomName) > -1
    }) 
    
    setPokemonFilter(results)
    // setPokemons(results)
  }

  const filtersPokemons = () => {    
    if (pokemonFilter.length > 0) {
      setPokemons(pokemonFilter)
      // setPokemons(results)
    }
  }
  
  const getPokemons = async () => {
    await fetch('https://pokeapi.co/api/v2/pokemon?limit=40').then((response) => {
      return response.json()
    }).then((res) => {
      createPokemonImage(res.results)
    })
  }
  const createPokemonImage = (data: Pokemon[]) => {
    let pokedexItem: Pokemon[] = data.map(({ name }: Pokemon) => {
      return {
        name,
        image: `https://img.pokemondb.net/artwork/large/${name}.jpg`
      }
    })

    setPokemons(pokedexItem)
  }

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <Fragment>
      <Header handleInput={handleInputSearch} handleFiltered={filtersPokemons} />

      <div className='flex flex-row flex-wrap mt-40 mx-10'>
        <div className='w-full flex flex-row flex-wrap gap-3 items-center justify-start '>
          <Counter quantity={pokemons.length}  />
          {pokemons.map(({ name, image }) => {
            return (
              <Pokedex name={name} image={ image } key={name} />
            )
          })}
        </div>
      </div>   
    </Fragment>
      
  )
}