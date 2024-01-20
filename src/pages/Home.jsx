import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState('all');

  return (
    <div className="font-['Euclid Circular B']">
        <Header />

        <div align='center'>
            <div className='text-center text-xl md:text-7xl md:leading-[87.64px] font-bold md:m-20 m-5'>Discover over 2,000,000 free Stock Images</div>
            
            <div className="flex w-fit p-3 justify-between items-center text-lg bg-zinc-300 bg-opacity-10 rounded-[8.91px] shadow-inner backdrop-blur-[50.07px]">
                <div className='flex items-center'>
                    <CiSearch className='font-bold text-xl' />
                    <div className='text-xl mx-3'>|</div>
                    <input
                        name='search'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className='px-2 p-1 bg-zinc-300 rounded bg-opacity-10 text-white placeholder-white placeholder-opacity-75 shadow-inner backdrop-blur-[50.07px] md:w-[400px]'
                        placeholder='Search'
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                            navigate(`/search/${search}`); 
                            }
                        }}
                    />
                </div>
                <Link to={`/search/${search}`}>
                    <div className='border-solid border-2 rounded px-3 ml-3 cursor-pointer'>GO!</div>
                </Link>
            </div>

            <div className="w-fit p-1 px-5 m-2 bg-zinc-300 bg-opacity-10 rounded-[8.91px] shadow-inner backdrop-blur-[50.07px]">
                <span className='font-bold'>Trending:</span> flowers, love, forest, river
            </div>
        </div>
    </div>
  )
}

export default Home