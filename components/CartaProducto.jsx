import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Producto } from "../context/ProductoContext";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {CarritoContexto} from "../context/CarritoContext";
import { useNavigation } from "@react-navigation/native";


export function CartaProducto() {
    const { show_producto } = useContext(Producto)
    const {agragar_carrito , carrito } = useContext(CarritoContexto)
    const navegacion = useNavigation()
   
    return (
        <View style={style.contenedor} >
            <View style={style.Imagen} >
                <Image
                    style={{ width: "100%", height: "100%", borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                    source={{ uri: show_producto.imagen }}

                />
            </View>
           
        </View>
    )
}

const style = StyleSheet.create({
    btn_add: {
        width: "100%",
        height: 35,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        
        marginTop: 20,
        marginBottom: 10
    },
    btn_add_text: {
        width: "90%",
        height: "100%",
        textAlign: "center",
        textAlignVertical: "center",
        color: "#FDFEFE",
        fontWeight: "500",
        backgroundColor: "#17202A",
        borderRadius: 5
    },
    contenedor: {
        width: "100%",
        height:"100%",
        backgroundColor: "#FDFEFE",
        borderRadius: 10,
       
        marginBottom: 10
    },
    contador: {

        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        width: "30%"
    },
    Imagen: {

        height: "55%",
        width: "100%",

    },
    text: {
        fontSize: 16,
        marginTop: 10,
        color: "#17202A",
        fontWeight: "300",
        width: '100%',
        paddingLeft: 20
    },
    descripcion: {
        padding: 5,
        fontWeight: "300",
        fontSize: 12,
        marginTop: 10,
        paddingLeft: 20,
        height: 'auto',
        width: '100%',
        marginBottom: 10
    },
    conten_precio_cantidad: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        width: '90%',
        marginBottom: 20
    },
    precio: {

        color: "#17202A",
        fontSize: 20,
        paddingLeft: 20,

        fontWeight: "500",
        justifyContent: "space-between"
    },
    stop: {
        fontSize: 16,
        fontWeight: "300",
        paddingLeft: 20,
      
        width: "100%",
    }
})