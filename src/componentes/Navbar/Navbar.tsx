import React from 'react'
import { Link } from 'react-router-dom';

function Navbar(){
  return (
    <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
      <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase'>Farmacia</Link>

            <div className='flex gap-4'>
              <Link to='/home' className='hover:underline'>Home</Link>
              <Link to='/categorias' className='hover:underline'>Categoria</Link>
              <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categoria</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
