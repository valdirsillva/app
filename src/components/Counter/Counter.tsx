import React, { useState, useEffect } from 'react'

interface CounterProps {
  quantity: number;
}

export function Counter({ quantity }: CounterProps) {

  return (
    <div className='w-full flex px-10'>
       {quantity > 0 ? (
         <h2 className='text-gray-200 text-3xl px-10 mr-10'>Resultados encontrados: {quantity} </h2>
       ) : ''}
    </div>
  )
}