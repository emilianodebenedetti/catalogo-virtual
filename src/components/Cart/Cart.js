import React from 'react'

const Cart = () => {
  return (
    <dialog id="cart" className="modal">
        <div className="py-2 card bg-grey shadow-inner shadow h-full">
            <h1 className='text-center text-xl text-black font-bold py-4'>Mi Pedido</h1>
            <div className="flex card card-side mx-4 shadow-md my-2 border border-slate-300 bg-gradient-to-t from-grey to-redGradient text-black">
                <figure className='w-40'><img className='h-full w-full object-cover' src="https://pizzeriaildiavolo.com/wp-content/uploads/2023/05/550C985B-2C68-49EB-BFCC-4A89C33B0402-scaled.jpeg" alt="Imagen pizza 4 quesos"/></figure>
                <div className="flex-grow grid py-4 px-4 text-left text-sm">
                    <h2 className="card-title font-bold">Pizza 4 quesos X 1</h2>
                    <p className='text-pretty overflow-hidden max-w-[400px]'>Esto es una pizza que tiene cuatro tipos de quesos diferentes.</p>
                    <span className='text-xl font-bold'>$ 400</span>
                </div>
                <div className='flex gap-2 absolute right-2 bottom-2'>
                    <div className="drop-shadow-md">
                    {/* Botón de editar */}
                    <button className="bg-white border-none w-8 h-auto rounded">
                        <svg className='m-auto' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 16l-1 4l4-1L19.586 7.414a2 2 0 0 0 0-2.828l-.172-.172a2 2 0 0 0-2.828 0zM15 6l3 3m-5 11h8"/></svg>
                    </button>
                    </div>
                    <div className="drop-shadow-md">
                    {/* Botón de eliminar */}
                    <button className="bg-red border-none w-8 h-auto rounded">
                        <svg className='m-auto' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#ffffff" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"/></svg>
                    </button>
                    </div>
                </div>
            </div>


            <div className="items-center text-center text-black p-4">
                <div>
                    <div className="w-full bg-red rounded-t-xl">
                        <span className="text-white">ENTREGA</span>
                    </div>

                    <label className="form-control w-full p-2 bg-white rounded-b-xl rounded-t-none shadow w-max-full">
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Take away</span> 
                                <input type="radio" name="delivery-option" className="radio checked:bg-red-500" checked />
                            </label>
                            <hr /> {/* Línea divisoria */}
                            <label className="label cursor-pointer">
                                <span className="label-text">Domicilio</span> 
                                <input type="radio" name="delivery-option" className="radio checked:bg-blue-500" />
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered border-2 bg-white w-full max-w-xs disabled:bg-white disabled:border-grey" disabled />
                        </div>
                    </label>
                </div>

                <div className="card-actions grid w-full pt-4">
                    <button 
                    className="btn bg-green border-none text-white">
                    ENVIAR PEDIDO - $ 400
                    <svg 
                        className='self-center'
                        xmlns="http://www.w3.org/2000/svg" 
                        width="25" 
                        height="25" 
                        viewBox="0 0 24 24">
                        <path fill="#ffffff" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18c.21-.58.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01"/>
                    </svg>
                    </button>
                    <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                </div>
            </div>
        </div>
    </dialog>
  )
}

export default Cart