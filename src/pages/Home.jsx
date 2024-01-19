import React, { useState } from 'react'
import Header from '../components/Header'
import { CiSearch } from "react-icons/ci";
import Results from '../components/Results';

const Home = () => {
    const [showResults, setShowResults] = useState(false);
    
    const handleResults = () => setShowResults(!showResults);

  return (
    <div className="font-['Euclid Circular B']" align='center'>
        <Header />
        {!showResults && (
            <div className='text-center text-xl md:text-7xl md:leading-[87.64px] font-bold md:m-20 m-5'>Discover over 2,000,000 free Stock Images</div>
        )}
        <div class="flex w-fit p-3 justify-between items-center text-lg bg-zinc-300 bg-opacity-10 rounded-[8.91px] shadow-inner backdrop-blur-[50.07px]">
            <div className='flex items-center'>
                <CiSearch className='font-bold text-xl' />
                <div className='text-xl mx-3'>|</div>
                <input
                className='px-2 p-1 bg-zinc-300 rounded bg-opacity-10 text-white placeholder-white placeholder-opacity-75 shadow-inner backdrop-blur-[50.07px] md:w-[400px]'
                placeholder='Search'
                />
            </div>
            <div className='border-solid border-2 rounded px-3 ml-3 cursor-pointer' onClick={handleResults}>GO!</div>
        </div>

        {!showResults && (
            <div class="w-fit p-1 px-5 m-2 bg-zinc-300 bg-opacity-10 rounded-[8.91px] shadow-inner backdrop-blur-[50.07px]">
                <span className='font-bold'>Trending:</span> flowers, love, forest, river
            </div>
        )}

        {showResults && (
            <div className='font-bold text-[42.61px] m-5'>Results: Technology</div>
        )}
        

        {showResults && <Results />}
    </div>
  )
}

export default Home