import React, { useEffect, useState } from 'react'
import ItemDetails from './ItemDetails';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';

const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  }));

const categories = ["Digital", "Computer", "Codierung", "Tech", "Netz", "Code", "finanzieren", "Marketing"]

const Results = ({results}) => {
    const [selectedPhoto, setSelectedPhoto] = useState();

    const [open, setOpen] = useState(false);
    const handleOpen = (item) => {
        if(open) {
            setSelectedPhoto();
        } else {
            setSelectedPhoto(item);
        }
        setOpen(!open);
    }

  return (
    <div className='bg-white text-black'>
        <div className="flex flex-wrap text-sm font-medium font-['Helvetica Neue'] p-3 bg-neutral-100">
        {categories.map((category, index) => (
            <Link to={`/search/${category}`} key={index}>
                <div className='border m-1 p-2 px-8 rounded border-neutral-500 cursor-pointer'>{category}</div>
            </Link>
        ))}
        </div>

        <Box sx={{  }}>
            <Masonry columns={3} spacing={2}>
                {results.map((item, index) => (
                <div key={index} onClick={() => handleOpen(item)}>
                    <img
                    srcSet={`${item.webformatURL}?w=162&auto=format&dpr=2 2x`}
                    src={`${item.webformatURL}?w=162&auto=format`}
                    alt={item.title}
                    loading="lazy"
                    style={{
                        borderBottomLeftRadius: 4,
                        borderBottomRightRadius: 4,
                        display: 'block',
                        width: '100%',
                    }}
                    />

                    <Label className='flex flex-wrap'>
                        {item.tags.split(',').map((tag, i2) => (
                        <div key={i2} className='bg-neutral-100 m-1 text-xs md:text-sm'>
                            {tag}
                        </div> ))}
                    </Label>
                </div>
                ))}
            </Masonry>
        </Box>
        
        {selectedPhoto && <ItemDetails open={open} handleOpen={handleOpen} selectedPhoto={selectedPhoto}/>} 
    </div>
  )
}

export default Results