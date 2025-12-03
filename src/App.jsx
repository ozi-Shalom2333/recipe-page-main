import React from 'react'
import Preparation from './components/Preparation'
import Ingredients from './components/Ingredients'
import Instruction from './components/Instruction'
import Nutrition from './components/Nutrition'


const App = () => {
  return (
    <div className='bg-custom-background w-screen md:flex md:items-center md:justify-center md:p-10'>
       <div className='bg-white md:rounded-2xl flex flex-col gap-8 md:gap-3 md:w-2/4'>
          <div className='w-screen md:w-full rounded h-[33vh] md:h-1/5 p-4'>
            <img src="/image-omelette.jpeg" alt="" className='w-full h-full object-cover md:rounded'/>
          </div>
          <h1 className='text-5xl px-6 font-young-serif font-bold md:text-3xl'> Simple Omelette Recipe</h1>
          <p className='font-outfit px-6 text-custom-stone90 font-medium md:text-sm'> An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
              to perfection, optionally filled with your choice of cheese, vegetables, or meats.
          </p>
          <Preparation/>
          <Ingredients/>
          <Instruction/>
          <Nutrition/>
       </div>
    </div>
  )
}

export default App
