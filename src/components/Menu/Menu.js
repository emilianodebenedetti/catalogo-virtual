import React, { useEffect, useState } from 'react';
import AddProduct from '../Cart/AddProduct';
import axios from 'axios';

const Menu = () => {
    const [categorias, setCategorias] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);

    //seteo categorias al cargar el componente
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/categorias');
                setCategorias(response.data);
            } catch (error) {
                console.error('Error fetching categorias:', error);
            }
        };
        fetchData();
    }, []);

    //muestro los productos de categoriaSeleccionada
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                if (categoriaSeleccionada) {
                    const response = await axios.get(`/api/productos/${categoriaSeleccionada.id}`);
                    setProductos(response.data);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching productos:', error);
            }
        };
        fetchData();
    }, [categoriaSeleccionada]);

    const handleCategoriaClick = (categoria) => {
        setCategoriaSeleccionada(categoria);
    };
/* 
    useEffect(() => {
        console.log(categoriaSeleccionada); 
    }, [categoriaSeleccionada]);  */

    return (
        <div className='grid gap-2 px-2 pt-2 rounded text-center'>
            {categorias.map(categoria => (
                <div className="collapse collapse-plus border border-slate-300" key={categoria.id} onClick={() => handleCategoriaClick(categoria)}>
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium" >
                        {categoria.nombre}
                    </div>
                    <div className="collapse-content bg-grey">
                    {loading && <span className="loading loading-spinner loading-lg text-red"></span>}
                        {!loading && productos.length > 0 ? (
                            productos.map(producto => (
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
                            ))
                        ) : (
                            !loading && <p>No hay productos disponibles</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Menu;
