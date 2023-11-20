import { createContext, useEffect, useState } from "react";

const Producto = createContext()
function ProductoContext({ children }) {
    const [show_producto, setShowProducto] = useState({})
    const [ AbrirProducto, setAbrirProducto] = useState(false)
    return (
        <Producto.Provider
            value={
                { 
                    show_producto, 
                    setShowProducto,
                    AbrirProducto,
                    setAbrirProducto ,
                }}
        >
            {children}
        </Producto.Provider>
    )
}

export { ProductoContext, Producto }