import React from 'react'
import Header from '../components/Header'

const History = () => {
  return (
    <div>
        <Header />

        <div align='center'>
            <div className='m-5'>
                <div className='md:text-3xl font-bold'>Previously Downloaded Images</div>
                <div></div>
            </div>
            <div className='m-5'>
                <div className='md:text-3xl font-bold'>Favorite Images</div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default History