import { View } from "react-native";
import { useState, createContext } from "react";


const CarritoContexto = createContext();
export default function CarritoContext({ children }) {
    const [carrito, SetCarrito] = useState([])
    const [suma, setSuma] = useState(true)

    const agragar_carrito = (producto) => {

        const si_existe = carrito.find(p => p.id == producto.id)
        if (si_existe) {
            si_existe.cantidad += si_existe.cantidad
            si_existe.precio += si_existe.precio
            setSuma(!true)
        } else {
            SetCarrito([...carrito, producto])

        }
    }

    const Total_carrito_precio = () => {
        const total_pago = carrito.reduce((acumulador, producto) => acumulador + (producto.precio), 0);
        return total_pago
    }

    const eliminarDelCarrito = (idProducto) => {
        SetCarrito((prevCarrito) => prevCarrito.filter(producto => producto.id !== idProducto));
    };

    return (
        <CarritoContexto.Provider
            value={
                {
                    setSuma,
                    suma,
                    carrito,
                    agragar_carrito,
                    eliminarDelCarrito,
                    Total_carrito_precio,
                }}
        >
            {children}
        </CarritoContexto.Provider>
    )
}
export { CarritoContexto }