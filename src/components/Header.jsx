import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between m-12 font-bold items-center backdrop-blur-xl p-3'>
        <div className='cursor-pointer'>Homepage</div>
        <div className='flex items-center'>
            <div className='mx-5 cursor-pointer'>Login</div>
            <div className='border-solid border-2 rounded-md p-1 cursor-pointer'>Create Account</div>
        </div>
    </div>
  )
}

export default Header