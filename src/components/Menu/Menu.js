import React from 'react'
import AddProduct from '../Cart/AddProduct'


const Menu = () => {
  return (
    <div className='grid gap-2 px-2 pt-2 rounded text-center'>
        <div className="collapse collapse-plus border border-slate-300">
            <input type="radio" name="my-accordion-3" />{/* defaultChecked */}
            <div className="collapse-title text-xl font-medium">
                PIZZAS {/* for each category */}
            </div>
            <div className="collapse-content bg-grey "> 
                {/* card */}
                <div className="flex card card-side shadow-md my-2 border border-slate-300 bg-gradient-to-t from-grey to-redGradient text-black">
                    <figure className='w-40'><img className='h-full w-full object-cover' src="https://pizzeriaildiavolo.com/wp-content/uploads/2023/05/550C985B-2C68-49EB-BFCC-4A89C33B0402-scaled.jpeg" alt="Imagen pizza 4 quesos"/></figure>
                    <div className="flex-grow grid py-4 px-4 text-left">
                        <h2 className="card-title font-bold">Pizza 4 quesos</h2>
                        <p className='text-pretty overflow-hidden max-w-[200px]'>Esto es una hamburguesa que tiene mucho cheddar</p>
                        <span className='text-xl font-bold'>$ 400</span>
                    </div>
                    <div className="absolute right-0 bottom-0">
                        <button className="bg-red border-none w-8 h-8 text-white text-xl rounded-tl-xl rounded-br-xl" onClick={()=>document.getElementById('my_modal_1').showModal()}>+</button>
                        <AddProduct />
                    </div>
                </div>
            </div>
        </div>
        <div className="collapse collapse-plus border border-slate-300">
            <input type="radio" name="my-accordion-3" /> 
            <div className="collapse-title text-xl font-medium">
                MILANESAS
            </div>
            <div className="collapse-content"> 
                <p>hello</p>
            </div>
        </div>
    </div>
  )
}

export default Menu
