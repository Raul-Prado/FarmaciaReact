import React, {useEffect, useState } from 'react';
import { Hourglass } from 'react-loader-spinner';
import Categoria from '../../../model/Categoria';
import { buscar } from '../../../services/Service';
import CardCategorias from '../CardCategoria/CardCategoria';

function ListaCategorias() {
  const [categoria, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategorias);
    } catch (error: any) {
      if (error.toString().includes('403')) {
        alert('Não foi possivel localizar categoria')
      }
    }
  }



  useEffect(() => {
    buscarCategorias();
  }, [categoria.length]);
  return (
    <>
      {categoria.length === 0 && (
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#306cce', '#72a1ed']}
      />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoria.map((categoria) => (
              <>
                <CardCategorias key={categoria.id} categorias={categoria} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;