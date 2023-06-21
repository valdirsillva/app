import React, { useState, useEffect, Fragment } from 'react'
import {  Pokedex } from '../../components/Pokedex/Pokedex'
import { Counter } from '../../components/Counter/Counter'

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
      <div className='w-full flex flex-row flex-wrap gap-3 items-center justify-center '>
        <Counter quantity={pokemons.length} />
        {pokemons.map(({ name, image }) => {
          return (
            <Pokedex name={name} image={ image } key={name} />
          )
        })}
      </div>
  )
}