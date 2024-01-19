import React, { useEffect, useState } from 'react'
import Item from './Item'
import ItemDetails from './ItemDetails';
import axios from 'axios';
import { Link } from 'react-router-dom';

const categories = ["Digital", "Computer", "Codierung", "Tech", "Netz", "Code", "finanzieren", "Marketing"]

const Results = ({results}) => {
    const [selectedPhoto, setSelectedPhoto] = useState({});

    const [open, setOpen] = useState(false);
    const handleOpen = (item) => {
        setSelectedPhoto(item);
        setOpen(!open);
    }

  return (
    <div className='bg-white text-black'>
        <div className="flex flex-wrap text-sm font-medium font-['Helvetica Neue'] p-3 bg-neutral-100">
        {categories.map((category, index) => (
            <Link to={`/search/${category}`}>
                <div key={index} className='border m-1 p-2 px-8 rounded border-neutral-500 cursor-pointer'>{category}</div>
            </Link>
        ))}
        </div>
        
        <div className='overflow-y-scroll h-[300px] md:h-[600px]'>
            <div className='grid md:grid-cols-3 grid-cols-2'>
            {results.map((item, index) => (
                <Item item={item} index={index} handleOpen={() => handleOpen(item)}/>
            ))}
            </div>
        </div>
        
        <ItemDetails open={open} handleOpen={handleOpen} selectedPhoto={selectedPhoto}/> 
    </div>
  )
}

export default Results