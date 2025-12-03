import React from 'react'

const Preparation = () => {
  return (
    <div className='px-6'>
       <div className='flex flex-col gap-2 px-4 py-6 rounded bg-custom-rose50'>
            <h2 className='text-custom-rose800 font-bold font-outfit text-[18px] '>Preparation time</h2>
            <ul className='px-4 font-outfit text-[17px] md:text-sm list-disc space-y-2 px-10'>
                <li><span className='font-bold'>Total</span>: Approximately 10 minutes</li>
                <li><span className='font-bold'>Preparation</span>: 5 minutes</li>
                <li><span className='font-bold'>Cooking</span>: 5 minutes</li>
            </ul>
       </div>
       
    </div>
  )
}

export default Preparation
