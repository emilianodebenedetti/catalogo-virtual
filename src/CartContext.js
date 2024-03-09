import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    //seteo estado para el carrito
    const [productosCarrito, setProductosCarrito]  = useState([]);

    //agrego productos al carrito
    const agregarAlCarrito = (producto) => {
        setProductosCarrito([...productosCarrito, producto]);
    };

    //elimino segun id
    const eliminarDeCarrito = (productoId) => {
        setProductosCarrito(productosCarrito.filter(producto => producto.id !== productoId));
    };

    //limpio el carrito
    const limpiarCarrito = () => {
        setProductosCarrito([]);
    };

    return (
        <CartContext.Provider value={{ productosCarrito, agregarAlCarrito, eliminarDeCarrito, limpiarCarrito }}>
            {children}
        </CartContext.Provider>
    );
};
