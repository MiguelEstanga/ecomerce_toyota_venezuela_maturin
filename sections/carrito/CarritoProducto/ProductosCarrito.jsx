import React, { useContext, useState } from "react";
import { View, Text, Image } from "react-native";
import { styleCarritoProducto } from "./ProductoCarritoStyle";
import { MaterialIcons } from '@expo/vector-icons';
import { CarritoContexto } from "../../../context/CarritoContext";
import Contador from "../../../components/Contador";
import { colores } from "../../../components/colores";

export default function ProductoCarrito({ data }) {
    const { eliminarDelCarrito, carrito } = useContext(CarritoContexto)
    const [contador, setContador] = useState(1)

   
    return (
        <View style={styleCarritoProducto.container} >
            <View style={styleCarritoProducto.imagen} >
                <Image
                    style={{ width: "100%", height: "100%" }}
                    source={{ uri: data.imagen }}
                />
            </View>
            <View style={styleCarritoProducto.data} >
                <Text style={styleCarritoProducto.text}>
                    {data.nombre}
                </Text>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    
                    height:50,
                    gap:20
                }} >
                    
                    <Contador
                        contador={contador}
                        setContador={setContador}
                        mode={true}
                        id={data.id}
                    />
                    <Text style={{
                        fontSize:20,
                        fontWeight:'300',
                        color:colores.primario
                    }} >
                        {data.precio}BS
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 5 }} >
                    <Text>
                        cantidad
                    </Text>
                    <Text>
                        {data.cantidad}
                      
                    </Text>

                </View>
            </View>
            <View style={styleCarritoProducto.eliminar} >
                <Text
                    onPress={() => {
                        eliminarDelCarrito(data.id)
                        console.log(data.id)
                    }}
                >
                    <MaterialIcons name="delete" size={24} color="#78281F" />
                </Text>
            </View>
        </View>
    )
}