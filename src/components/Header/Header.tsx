import React from 'react'
import { InputSearch } from '../Search/InputSearch'

export function Header({ handleInput, handleFiltered }: any) {

  return (
    <header 
      className='w-full fixed top-0 h-8 p-10 flex items-center bg-[#141418] border-indigo-500 border-b-2  '>
      <InputSearch handleInputSearch={handleInput} handleFiltered={handleFiltered} /> 
    </header>
  )
}