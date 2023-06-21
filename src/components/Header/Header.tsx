import React from 'react'

export function Header() {
  return (
    <header className='h-8 p-10 flex items-center bg-[#141418]'>
      <form className='w-full flex justify-center items-center relative gap-3'>
        <input type='search' className='w-5/12 p-2 px-4 border-2 rounded-3xl placeholder-gray-400 ' placeholder='O que está procurando?' />
        <button type='button' className='px-5 py-2 border border-white rounded-3xl text-white '>Pesquisar</button>
      </form>
    </header>
  )
}