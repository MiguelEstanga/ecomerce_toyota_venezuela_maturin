import React, { useContext, useEffect, useState } from "react";
import { StylesInicio } from "./style/Main";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Productos } from "../../components/Productos";
import productos_pruebas from "./json/productos"
import {Producto, ProductoContext} from "../../context/ProductoContext";
import productos from "./json/productos";
import Carrucel from "../../components/Carrucel";
export default function InicioMain() {
    const [modal, setModal] = useState(true)
    const {show_producto} = useContext(Producto)

    useEffect(() => {
       // console.log(show_producto)
    }, [show_producto ])

    const handle_producto = (data) => {
        obtenerProducto({ ...data })
        //console.log(show_producto)
    }
    return (
       
            <ScrollView style={{ backgroundColor: "#ECF0F1" }} >
               
                <View style={StylesInicio.container} >
                <Carrucel/>
                    {productos_pruebas.map(productos => (

                        <Productos
                            key={productos.id}
                            data={productos}        
                        />


                    ))}
                </View>

            </ScrollView>
       
    )
}

