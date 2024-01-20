import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { CiSearch } from "react-icons/ci";
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Results from '../components/Results';
import axios from 'axios';
import { Spinner } from "@material-tailwind/react";

const Search = () => {
    const param = useParams();
    const navigate = useNavigate();
    const [search, setSearch] = useState(param.q);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const getResults = async () => {
            try {
                const { data } = await axios.get(`https://pixabay.com/api/?key=41918411-dde77db940663fd72f850c151&q=${search}&image_type=photo`);
                setResults(data.hits)
            } catch (error) {
                console.error(error.message);
            }
        }

        if(param.q) setSearch(param.q);
        getResults();
    }, [param.q]);

  return (
    <div className="font-['Euclid Circular B']" align='center'>
        <Header />

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

        <div className='font-bold text-[42.61px] m-5'>Results: {search}</div>

        {results.length === 0 ?
        <Spinner /> : 
        <Results results={results} />
        }
    </div>
  )
}

export default Search