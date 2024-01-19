import React from 'react'

const Item = ({item, index, handleOpen}) => {
  return (
    <div key={index} className='md:m-3 m-1' onClick={handleOpen}>
        <img src={'https://www.yafta.co.uk/wp-content/uploads/2020/01/3049675.jpg'} alt={item} className='rounded-lg h-16 md:h-56'/> 
        <div className='flex justify-center'>
            <div className='bg-neutral-100 m-1'>ehlloo</div>
            <div className='bg-neutral-100 m-1'>namaste</div>
            <div className='bg-neutral-100 m-1'>kese ho?</div>
        </div> 
    </div>
  )
}

export default Item