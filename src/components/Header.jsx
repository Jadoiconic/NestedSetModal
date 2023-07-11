import React from 'react'
import { Link } from 'react-router-dom'


function NavBar() {

    

  return (
    <div className='px-12 py-6 flex justify-between bg-indigo-400 sticky top-0 shadow box-shadow text-white font-bold from-zinc-50'>
        <div>
            
            <Link to={'/'}>
            <h1 className='text-3xl'>NestedSetModal</h1>
            </Link>
        </div>
        <div className='flex items-center space-x-6'>
            <Link to={'/'}>Home</Link>
            <Link to={'/new-root-category'}>Add New Category</Link>
        </div>
    </div>
  )
}

export default NavBar