import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

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

    return (
        <div className='grid gap-2 px-2 pt-2 rounded text-center'>
            {/* Listo categorias mediante map*/}
            {categorias.map(categoria => (
                <div className="collapse collapse-plus border border-slate-300" key={categoria.id} onClick={() => handleCategoriaClick(categoria)}>
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium" >
                        {categoria.nombre}
                    </div>
                    <div className="collapse-content bg-grey">
                    {/* listo productos que corresponden a la categoria seleccionada */}
                    {loading && <span className="loading loading-spinner loading-lg text-red"></span>}
                        {!loading && productos.length > 0 ? (
                            productos.map(producto => (
                                <ProductCard key={producto.id} producto={producto} />
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
