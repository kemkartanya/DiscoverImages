import React from 'react'
import Item from './Item'
import ItemDetails from './ItemDetails';

const categories = ["Digital", "Computer", "Codierung", "Tech", "Netz", "Code", "finanzieren", "Marketing"]

const Results = () => {
    const [open, setOpen] = React.useState(false);
    
    const handleOpen = () => setOpen(!open);

  return (
    <div className='bg-white text-black'>
        <div className="flex flex-wrap text-sm font-medium font-['Helvetica Neue'] p-3 bg-neutral-100">
        {categories.map((category, index) => (
            <div key={index} className='border m-1 p-2 px-8 rounded border-neutral-500'>{category}</div>
        ))}
        </div>
        
        <div className='overflow-y-scroll h-[300px] md:h-[600px]'>
            <div className='grid md:grid-cols-3 grid-cols-2'>
            { categories.map((item, index) => (
                <Item item={item} index={index} handleOpen={handleOpen}/>
            ))}
            </div>
        </div>

        <ItemDetails open={open} handleOpen={handleOpen} />
    </div>
  )
}

export default Results