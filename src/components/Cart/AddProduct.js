import React from 'react'
import Cart from './Cart'

const AddProduct = () => {
  return (
    <dialog id="my_modal_1" className="modal">
        <div className="m-2 card bg-grey h-full shadow-inner shadow">
            <h1 className='text-center text-xl text-black font-bold py-4'>Agregando producto</h1>
            <figure className="p-2 ">
                <img className='rounded-xl shadow' src="https://pizzeriaildiavolo.com/wp-content/uploads/2023/05/550C985B-2C68-49EB-BFCC-4A89C33B0402-scaled.jpeg" alt="Imagen pizza 4 quesos"/>
            </figure>
            <div className="card-body items-center text-center text-black">
                <h2 className="card-title">Pizza 4 quesos</h2>
                <p>Mozzarella, queso cheddar y queso emmental</p>
                <h2 className="card-title">$ 400</h2>

                <p>Cantidad</p>
                <div className='flex bg-white rounded-full h-8'>
                    <span className="">
                        <button className=' text-xl'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 28 28"><path fill="#D12323" d="M14 2c6.627 0 12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14S7.373 2 14 2M8.75 13.25a.75.75 0 0 0-.102 1.493l.102.007h10.5a.75.75 0 0 0 .102-1.493l-.102-.007z"/></svg></button>{/* png flecha para sumar */}
                    </span> 
                    <span className="countdown font-mono m-2">
                        <span style={{"--value":1}}></span>
                    </span>
                    <span className="">
                        <button className='text-xs'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 28 28"><path fill="#D12323" d="M14 2c6.627 0 12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14S7.373 2 14 2m0 6a.75.75 0 0 0-.743.648l-.007.102v4.5h-4.5a.75.75 0 0 0-.102 1.493l.102.007h4.5v4.5a.75.75 0 0 0 1.493.102l.007-.102v-4.5h4.5a.75.75 0 0 0 .102-1.493l-.102-.007h-4.5v-4.5A.75.75 0 0 0 14 8"/></svg></button>{/* png flecha para sumar */}
                    </span>
                </div>

                <label className="form-control w-full">
                    <div className="bg-red rounded-t-xl">
                        <span className="text-white">INFORMACIÓN EXTRA</span>
                    </div>
                    <textarea className="textarea bg-white h-24 rounded-b-xl rounded-t-none shadow" placeholder="Información necesaria a considerar ..."></textarea>
                </label>
                <div className="card-actions grid w-full ">
                    <button className="btn bg-green border-none text-white" onClick={()=>document.getElementById('cart').showModal()}>AGREGAR AL CARRO - $ 400</button>
                    <Cart/>
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                </div>
            </div>
        </div>

    </dialog>
  )
}

export default AddProduct