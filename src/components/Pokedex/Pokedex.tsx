import React from 'react'

interface PokemonProps {
  name: string;
  image: string;
}

export function Pokedex({ name, image }: PokemonProps) {
  return (
    <div className='w-2/10 bg-[#161618] text-gray-300' >
       <div className=' bg-[#181921] p-5 flex-col gap-3 flex items-center'>
          <img src={image} className='object-fill h-60 w-60 rounded'/>
          <span className='flex items-center text-2xl font-bold text-indigo-500 tracking-wide capitalize'>
            {name}
          </span>
       </div>
    </div>
  )
}