import React, { ChangeEvent } from "react";
import { Search } from 'lucide-react'

export function InputSearch({ handleInputSearch, handleFiltered }: any) {
  const inputChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    handleInputSearch(e)
  }

  const filteredPokemon = () => {
    handleFiltered()
  }

  return (
    <div className="w-full flex items-center">
      <div className="relative w-full flex justify-center ">
        <input
          type="text"
          onChange={inputChangeValue}
          className="sm:w-12/12 w-5/12 p-2 px-5 border-1 rounded-3xl placeholder-gray-300 bg-[#474747] "
          placeholder="Search"
        />
        <button className="relative transition duration-700 ease-in-out text-white rounded-3xl bg-indigo-500 px-7 right-[80px] hover:bg-indigo-600"
          onClick={filteredPokemon}
        >
          <Search/>
        </button>
      </div>
    </div>
  );
}
