import { useContext, useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { CarritoContexto } from '../context/CarritoContext';
import productos from '../sections/InicioSeccion/json/productos';

export default function Contador({
    contador,
    setContador,
    mode,
    id 
}) {
    const { carrito , setSuma , suma } = useContext(CarritoContexto)
    const [precio , setPrecio] = useState(0)
    useEffect(()=>{
        const producto = carrito.find(p => p.id == id)
        const bd_proucto = productos.find(producto_id => producto_id == id )
        
        if(producto){
            setContador(producto.cantidad)
            setPrecio(producto.precio)
        }
    },[])
    const handleSumar = () => {
        setContador(contador + 1)
        if(mode == true){
            const producto = carrito.find(p => p.id == id)
            producto.cantidad = contador + 1
            producto.precio =  precio * (contador + 1)
            setSuma(!suma)
        }
    }
    
    const handleRestar = () => {
        setContador(contador - 1)
        if(mode == true && contador > 1){
            const producto = carrito.find(p => p.id == id)
            producto.cantidad = contador - 1
            producto.precio = precio * (contador-1)
            setSuma(!suma)
        }
    }
    

    return (
        <View
            style={{
                flexDirection: "row",
                gap: 10,
                justifyContent: "center",
                alignItems: "center"
            }}
        >


            <Text onPress={() => handleRestar() } >
                <AntDesign name="minussquareo" size={24} color="black" />
            </Text>
            <Text style={{ fontSize: 24 }} >
                {contador}
            </Text>
            <Text
                onPress={() => { handleSumar() }}
            >
                <AntDesign name="plussquareo" size={24} color="black" />
            </Text>
        </View>
    )
}