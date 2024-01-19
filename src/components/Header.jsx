import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between m-12 font-bold items-center backdrop-blur-xl p-3'>
        <Link to={`/`}>
            <div className='cursor-pointer'>Homepage</div>
        </Link>
        <div className='flex items-center'>
            <Link to={`/login`}>
                <div className='mx-5 cursor-pointer'>Login</div>
            </Link>
            <Link to={`/signup`}>
                <div className='border-solid border-2 rounded-md p-1 cursor-pointer'>Create Account</div>
            </Link>
        </div>
    </div>
  )
}

export default Header