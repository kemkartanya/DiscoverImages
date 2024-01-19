import React from 'react'

const Item = ({item, index, handleOpen}) => {
  return (
    <div key={index} className='md:m-3 m-1' onClick={handleOpen}>
        <img src={item.userImageURL} alt={item} className='rounded-lg h-16 md:h-56'/> 
        <div className='flex justify-center'>
        {item.tags.split(',').map((tag, index) => (
        <div key={index} className='bg-neutral-100 m-1'>
            {tag}
        </div>
        ))}
        </div> 
    </div>
  )
}

export default Item