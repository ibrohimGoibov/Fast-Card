import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='text-center'>
        <h1 className='text-[40px] mb:text-[110px]'>404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
         <Link to={'/'}>
        <button className='w-[250px] mt-[20px] h-[46px] bg-[#DB4444] text-white'>Back to home page</button>
        </Link>
    </div>
  )
}

export default Error