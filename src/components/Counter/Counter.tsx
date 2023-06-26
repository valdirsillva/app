import React, { useState, useEffect } from 'react'

interface CounterProps {
  quantity: number;
}

export function Counter({ quantity }: CounterProps) {

  return (
    <div className='w-full flex px-0 '>
       {quantity > 0 ? (
         <div className='px-5 ml-0 mb-10 '>
            <h2 className='text-4xl left-10 font-medium text-indigo-500'>Resultados encontrados: {quantity}</h2> 
         </div>
       ) : ''}
    </div>
  )
}