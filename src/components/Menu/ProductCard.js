import React from 'react'
import AddProduct from '../Cart/AddProduct'

const ProductCard = ({ producto }) => {
  return (
    <div className="flex card card-side shadow-md my-2 border border-slate-300 bg-gradient-to-t from-grey to-redGradient text-black" key={producto.id}>
        <figure className='w-40'><img className='h-full w-full object-cover' src={producto.imagen} alt={producto.nombre} /></figure>
        <div className="flex-grow grid py-4 px-4 text-left">
            <h2 className="card-title font-bold">{producto.nombre}</h2>
            <p className='text-pretty overflow-hidden max-w-[200px]'>{producto.descripcion}</p>
            <span className='text-xl font-bold'>$ {producto.precio}</span>
        </div>
        <div className="absolute right-0 bottom-0">
            <button className="bg-red border-none w-8 h-8 text-white text-xl rounded-tl-xl rounded-br-xl" onClick={() => document.getElementById('my_modal_1').showModal()}>+</button>
            <AddProduct />
        </div>
    </div>
  )
}

export default ProductCard