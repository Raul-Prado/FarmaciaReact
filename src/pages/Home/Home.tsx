import React from 'react';
import './Home.css';

import ListaCategoria from '../../componentes/Categoria/ListarCategorias/ListarCategorias';
import ModalCategoria from '../../componentes/Categoria/FormCategoria/FormCategoria'


function Home() {
    return (
        <>
        <div className="bg-indigo-900 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vindo!</h2>
              <p className='text-xl'>Farmacia popular</p>
            </div>
  
            <div className="flex justify-center ">
              {/* <img src={homeLogo} alt="" className='w-2/3' /> */}
      
            </div>
          </div>
        </div>
        <ListaCategoria />
      </>
    );
}

export default Home;